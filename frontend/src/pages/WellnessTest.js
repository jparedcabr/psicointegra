import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const WellnessTest = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });

  const questions = [
    {
      id: 'q1',
      question: '¿Cómo calificarías tu nivel de estrés en las últimas semanas?',
      options: [
        { text: 'Muy bajo', value: 5 },
        { text: 'Bajo', value: 4 },
        { text: 'Moderado', value: 3 },
        { text: 'Alto', value: 2 },
        { text: 'Muy alto', value: 1 }
      ]
    },
    {
      id: 'q2',
      question: '¿Cón qué frecuencia te sientes satisfecho/a con tu vida?',
      options: [
        { text: 'Casi siempre', value: 5 },
        { text: 'Frecuentemente', value: 4 },
        { text: 'A veces', value: 3 },
        { text: 'Raramente', value: 2 },
        { text: 'Casi nunca', value: 1 }
      ]
    },
    {
      id: 'q3',
      question: '¿Cómo describirías tu calidad de sueño?',
      options: [
        { text: 'Excelente', value: 5 },
        { text: 'Buena', value: 4 },
        { text: 'Regular', value: 3 },
        { text: 'Mala', value: 2 },
        { text: 'Muy mala', value: 1 }
      ]
    },
    {
      id: 'q4',
      question: '¿Con qué frecuencia experimentas ansiedad o preocupación excesiva?',
      options: [
        { text: 'Casi nunca', value: 5 },
        { text: 'Raramente', value: 4 },
        { text: 'A veces', value: 3 },
        { text: 'Frecuentemente', value: 2 },
        { text: 'Casi siempre', value: 1 }
      ]
    },
    {
      id: 'q5',
      question: '¿Cómo es tu relación con las personas importantes en tu vida?',
      options: [
        { text: 'Muy buena', value: 5 },
        { text: 'Buena', value: 4 },
        { text: 'Regular', value: 3 },
        { text: 'Mala', value: 2 },
        { text: 'Muy mala', value: 1 }
      ]
    },
    {
      id: 'q6',
      question: '¿Te sientes capaz de manejar tus emociones?',
      options: [
        { text: 'Totalmente capaz', value: 5 },
        { text: 'Mayormente capaz', value: 4 },
        { text: 'A veces sí, a veces no', value: 3 },
        { text: 'Poco capaz', value: 2 },
        { text: 'No me siento capaz', value: 1 }
      ]
    },
    {
      id: 'q7',
      question: '¿Con qué frecuencia realizas actividades que disfrutas?',
      options: [
        { text: 'Muy frecuentemente', value: 5 },
        { text: 'Frecuentemente', value: 4 },
        { text: 'A veces', value: 3 },
        { text: 'Raramente', value: 2 },
        { text: 'Casi nunca', value: 1 }
      ]
    },
    {
      id: 'q8',
      question: '¿Cómo calificarías tu nivel de energía en el día a día?',
      options: [
        { text: 'Muy alto', value: 5 },
        { text: 'Alto', value: 4 },
        { text: 'Moderado', value: 3 },
        { text: 'Bajo', value: 2 },
        { text: 'Muy bajo', value: 1 }
      ]
    }
  ];

  const handleAnswer = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
    
    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${API}/wellness-test`, {
        name: userInfo.name || undefined,
        email: userInfo.email || undefined,
        answers
      });
      
      setResult(response.data);
    } catch (error) {
      console.error('Error submitting wellness test:', error);
    }
  };

  const progress = ((Object.keys(answers).length / questions.length) * 100).toFixed(0);

  const getResultMessage = (category) => {
    switch (category) {
      case 'Excelente bienestar':
        return '¡Felicidades! Estás en un excelente estado de bienestar emocional. Mantén tus hábitos saludables.';
      case 'Buen bienestar':
        return 'Tu bienestar emocional es bueno. Considera reforzar algunas áreas para mantener tu equilibrio.';
      case 'Bienestar moderado':
        return 'Tu bienestar emocional está en un nivel moderado. Podría ser beneficioso buscar apoyo profesional.';
      default:
        return 'Tu bienestar emocional necesita atención. Te recomendamos agendar una consulta con nuestros profesionales.';
    }
  };

  if (result) {
    return (
      <div className="min-h-screen" data-testid="wellness-test-result">
        <section className="hero-gradient pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                <CheckCircle size={40} />
              </div>

              <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
                Tu Resultado de Bienestar
              </h1>

              <div className="mb-6">
                <div className="text-6xl font-bold text-primary mb-2">{result.score}/40</div>
                <p className="text-2xl font-serif text-foreground">{result.category}</p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {getResultMessage(result.category)}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contacto"
                  data-testid="cta-agendar-from-test"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all"
                >
                  Agendar Consulta
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  to="/"
                  data-testid="back-to-home-from-test"
                  className="inline-flex items-center justify-center bg-white text-primary border-2 border-primary/20 hover:bg-primary/5 rounded-full px-8 py-4 text-lg font-medium transition-all"
                >
                  Volver al Inicio
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen" data-testid="wellness-test-page">
      <section className="hero-gradient pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground leading-tight mb-6">
              Test de Bienestar Emocional
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Responde estas preguntas para conocer tu nivel de bienestar emocional
            </p>
          </motion.div>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">Progreso</span>
              <span className="text-sm font-medium text-primary">{progress}%</span>
            </div>
            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
          >
            <div className="mb-6">
              <span className="text-sm font-medium text-primary">Pregunta {currentStep + 1} de {questions.length}</span>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mt-2">
                {questions[currentStep].question}
              </h2>
            </div>

            <div className="space-y-3">
              {questions[currentStep].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(questions[currentStep].id, option.value)}
                  data-testid={`answer-option-${index}`}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                    answers[questions[currentStep].id] === option.value
                      ? 'border-primary bg-accent text-accent-foreground'
                      : 'border-slate-200 hover:border-primary/50 hover:bg-accent/30'
                  }`}
                >
                  <span className="font-medium">{option.text}</span>
                </button>
              ))}
            </div>

            {Object.keys(answers).length === questions.length && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 space-y-4"
              >
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Tu nombre (opcional)"
                    value={userInfo.name}
                    onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                    data-testid="input-test-name"
                    className="w-full rounded-xl border-slate-200 bg-white focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all h-12 px-4"
                  />
                  <input
                    type="email"
                    placeholder="Tu email (opcional)"
                    value={userInfo.email}
                    onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                    data-testid="input-test-email"
                    className="w-full rounded-xl border-slate-200 bg-white focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all h-12 px-4"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  data-testid="submit-wellness-test"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
                >
                  Ver Resultado
                  <ArrowRight className="ml-2" size={20} />
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WellnessTest;