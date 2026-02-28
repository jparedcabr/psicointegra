from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

class ContactRequest(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: str
    psychologist: str
    service: str
    message: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ContactRequestCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    psychologist: str
    service: str
    message: str

class WellnessTestResult(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: Optional[str] = None
    email: Optional[EmailStr] = None
    score: int
    category: str
    answers: dict
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class WellnessTestSubmit(BaseModel):
    name: Optional[str] = None
    email: Optional[EmailStr] = None
    answers: dict

class BlogPost(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str
    title: str
    slug: str
    excerpt: str
    content: str
    author: str
    category: str
    image_url: str
    published_date: str
    read_time: int

class NewsletterSubscription(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: EmailStr
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class NewsletterSubscriptionCreate(BaseModel):
    email: EmailStr

@api_router.get("/")
async def root():
    return {"message": "Psico-Integra API"}

@api_router.post("/contact", response_model=ContactRequest)
async def create_contact_request(input: ContactRequestCreate):
    contact_dict = input.model_dump()
    contact_obj = ContactRequest(**contact_dict)
    
    doc = contact_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    await db.contact_requests.insert_one(doc)
    
    return contact_obj

@api_router.post("/wellness-test", response_model=WellnessTestResult)
async def submit_wellness_test(input: WellnessTestSubmit):
    answers = input.answers
    score = sum(int(v) for v in answers.values() if isinstance(v, (int, str)) and str(v).isdigit())
    
    if score >= 35:
        category = "Excelente bienestar"
    elif score >= 25:
        category = "Buen bienestar"
    elif score >= 15:
        category = "Bienestar moderado"
    else:
        category = "Necesitas apoyo"
    
    result = WellnessTestResult(
        name=input.name,
        email=input.email,
        score=score,
        category=category,
        answers=answers
    )
    
    doc = result.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    await db.wellness_tests.insert_one(doc)
    
    return result

@api_router.get("/blog-posts", response_model=List[BlogPost])
async def get_blog_posts():
    blog_posts = [
        {
            "id": "1",
            "title": "¿Cómo manejar la ansiedad en tiempos difíciles?",
            "slug": "como-manejar-ansiedad",
            "excerpt": "La ansiedad es una respuesta natural del cuerpo, pero cuando se vuelve abrumadora, es importante saber cómo gestionarla de manera efectiva.",
            "content": "La ansiedad es una emoción que todos experimentamos en algún momento de nuestras vidas. Es la respuesta natural del cuerpo ante situaciones de estrés o peligro. Sin embargo, cuando la ansiedad se vuelve constante y abrumadora, puede afectar significativamente nuestra calidad de vida.\n\nEn este artículo, exploraremos técnicas efectivas para manejar la ansiedad: respiración profunda, mindfulness, ejercicio físico regular, y la importancia de buscar ayuda profesional cuando sea necesario.",
            "author": "Lander Morales",
            "category": "Ansiedad",
            "image_url": "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800",
            "published_date": "2026-01-15",
            "read_time": 5
        },
        {
            "id": "2",
            "title": "La importancia de la comunicación en las relaciones de pareja",
            "slug": "comunicacion-pareja",
            "excerpt": "Una comunicación efectiva es la base de toda relación saludable. Descubre cómo mejorar la comunicación con tu pareja.",
            "content": "La comunicación es el pilar fundamental de cualquier relación de pareja exitosa. Sin ella, surgen malentendidos, resentimientos y conflictos que pueden erosionar incluso el vínculo más fuerte.\n\nEn terapia de pareja, trabajamos técnicas de escucha activa, expresión asertiva de emociones y resolución de conflictos que fortalecen la conexión emocional.",
            "author": "Violeta Silva",
            "category": "Relaciones",
            "image_url": "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800",
            "published_date": "2026-01-20",
            "read_time": 6
        },
        {
            "id": "3",
            "title": "Desarrollo emocional en niños: Guía para padres",
            "slug": "desarrollo-emocional-ninos",
            "excerpt": "Comprender el desarrollo emocional de los niños es clave para apoyarlos en su crecimiento saludable.",
            "content": "El desarrollo emocional infantil es un proceso complejo que requiere atención y comprensión por parte de los padres. Los niños necesitan aprender a identificar, expresar y regular sus emociones de manera saludable.\n\nEn este artículo, exploramos las etapas del desarrollo emocional, cómo los padres pueden fomentar la inteligencia emocional, y cuándo buscar ayuda profesional.",
            "author": "Violeta Silva",
            "category": "Infantil",
            "image_url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800",
            "published_date": "2026-01-25",
            "read_time": 7
        }
    ]
    
    return blog_posts

@api_router.get("/blog-posts/{slug}", response_model=BlogPost)
async def get_blog_post(slug: str):
    all_posts = await get_blog_posts()
    post = next((p for p in all_posts if p.slug == slug), None)
    
    if not post:
        raise HTTPException(status_code=404, detail="Post no encontrado")
    
    return post

@api_router.post("/newsletter", response_model=NewsletterSubscription)
async def subscribe_newsletter(input: NewsletterSubscriptionCreate):
    existing = await db.newsletter_subscriptions.find_one({"email": input.email}, {"_id": 0})
    
    if existing:
        raise HTTPException(status_code=400, detail="Este email ya está suscrito")
    
    subscription = NewsletterSubscription(email=input.email)
    
    doc = subscription.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    await db.newsletter_subscriptions.insert_one(doc)
    
    return subscription

app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()