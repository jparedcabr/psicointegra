import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, User, ArrowLeft, Calendar } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${API}/blog-posts/${slug}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen pt-32 pb-20" data-testid="blog-post-loading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">Cargando artículo...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-20" data-testid="blog-post-not-found">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-serif font-semibold text-foreground mb-4">Artículo no encontrado</h1>
          <Link to="/blog" className="text-primary hover:text-primary/80">
            Volver al blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" data-testid="blog-post-page">
      <section className="pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            data-testid="back-to-blog"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Volver al blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center space-x-2 bg-accent px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium text-primary">{post.category}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center space-x-2">
                <User size={18} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={18} />
                <span>{new Date(post.published_date).toLocaleDateString('es-PE', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={18} />
                <span>{post.read_time} min de lectura</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img
              src={post.image_url}
              alt={post.title}
              className="w-full h-96 object-cover rounded-3xl shadow-2xl mb-12"
            />

            <div className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-white to-accent/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100"
          >
            <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">
              ¿Te identificas con este tema?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Podemos ayudarte. Agenda tu consulta y comienza tu proceso de bienestar.
            </p>
            <Link
              to="/contacto"
              data-testid="cta-agendar-from-post"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Agendar Cita
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;