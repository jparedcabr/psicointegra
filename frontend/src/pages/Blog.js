import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, User, ArrowRight } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${API}/blog-posts`);
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen" data-testid="blog-page">
      <section className="hero-gradient pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-tight mb-6">
              Blog de Psicología
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Artículos y recursos para tu bienestar emocional
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white" data-testid="blog-posts-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Cargando artículos...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  data-testid={`blog-post-${index}`}
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="block bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group h-full flex flex-col"
                  >
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={post.image_url}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-serif font-semibold text-foreground mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-slate-100">
                        <div className="flex items-center space-x-2">
                          <User size={16} />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock size={16} />
                          <span>{post.read_time} min</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-accent/30 to-white" data-testid="cta-subscribe">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
              ¿Quieres recibir nuestros artículos?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Síguenos en nuestras redes sociales para no perderte ningún contenido
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.facebook.com/psico.integra"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="cta-facebook"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all"
              >
                Seguir en Facebook
              </a>
              <a
                href="https://www.instagram.com/psico.integra"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="cta-instagram"
                className="inline-flex items-center justify-center bg-white text-primary border-2 border-primary/20 hover:bg-primary/5 rounded-full px-8 py-4 text-lg font-medium transition-all"
              >
                Seguir en Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;