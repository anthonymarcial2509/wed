import React, { useState, useEffect } from 'react';
import { 
  Home, Users, Briefcase, MessageCircle, 
  Bell, Search, PlusCircle, User, 
  Menu, X, Shield, Star, Building, 
  Clock, Award, ThumbsUp, ThumbsDown, 
  Check, Heart 
} from 'lucide-react';

const BuildLinkPlatform = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [selectedProfessional, setSelectedProfessional] = useState(null);

  const navItems = [
    { name: 'Inicio', icon: Home, section: 'home' },
    { name: 'Red', icon: Users, section: 'network' },
    { name: 'Proyectos', icon: Briefcase, section: 'projects' },
    { name: 'Mensajes', icon: MessageCircle, section: 'messages' },
    { name: 'Notificaciones', icon: Bell, section: 'notifications' }
  ];

  const categories = [
    { title: 'Ingenieros', icon: Building, desc: 'Profesionales certificados' },
    { title: 'Maestros de Obra', icon: Award, desc: 'Expertos en supervisión' },
    { title: 'Técnicos', icon: Star, desc: 'Especialistas en áreas' },
    { title: 'Electricistas', icon: Shield, desc: 'Instalaciones eléctricas' },
    { title: 'Plomeros', icon: Clock, desc: 'Servicios de agua' }
  ];

  const posts = [
    {
      user: { name: 'Juan Pérez', role: 'Ingeniero Civil' },
      content: 'Nuevo proyecto de infraestructura urbana',
      likes: 42,
      comments: 7
    },
    {
      user: { name: 'María Rodriguez', role: 'Arquitecta' },
      content: 'Diseño sostenible: Último proyecto de edificio verde',
      likes: 67,
      comments: 12
    }
  ];

  const professionals = [
    {
      id: 1,
      name: 'Juan Pérez',
      profession: 'Ingeniero Civil',
      rating: 4.7,
      totalReviews: 42,
      skills: ['Diseño', 'Gestión de Proyectos'],
      verifications: ['Título Profesional', 'Seguro'],
      reviews: [
        {
          user: 'Empresa Constructora A',
          rating: 5,
          text: 'Excelente trabajo, muy profesional y cumplido.',
          date: '2024-02-01'
        }
      ]
    },
    {
      id: 2,
      name: 'María Rodriguez',
      profession: 'Arquitecta',
      rating: 4.9,
      totalReviews: 35,
      skills: ['Diseño Sostenible', 'Modelado 3D'],
      verifications: ['Colegio de Arquitectos', 'Certificaciones'],
      reviews: [
        {
          user: 'Desarrollo Inmobiliario X',
          rating: 5,
          text: 'Diseño innovador y atención al detalle.',
          date: '2024-01-20'
        }
      ]
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        className={`inline-block ${
          index < Math.floor(rating) 
            ? 'text-yellow-500' 
            : 'text-gray-300'
        }`} 
        fill={index < Math.floor(rating) ? 'currentColor' : 'none'}
      />
    ));
  };

  const ProfessionalDetails = ({ professional, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{professional.name}</h2>
          <button onClick={onClose} className="text-gray-600">
            <X />
          </button>
        </div>

        <div className="flex items-center mb-4">
          <div className="flex items-center mr-4">
            {renderStars(professional.rating)}
            <span className="ml-2 text-gray-600">
              ({professional.rating}/5)
            </span>
          </div>
          <span className="text-sm text-gray-500">
            {professional.totalReviews} reseñas
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <h3 className="font-semibold mb-2">Habilidades</h3>
            <div className="flex flex-wrap gap-2">
              {professional.skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Verificaciones</h3>
            <div className="flex flex-wrap gap-2">
              {professional.verifications.map((verification, index) => (
                <span 
                  key={index} 
                  className="bg-green-50 text-green-600 px-2 py-1 rounded-full text-sm flex items-center"
                >
                  <Check className="mr-1" size={16} />
                  {verification}
                </span>
              ))}
            </div>
          </div>
        </div>

        <h3 className="font-semibold mb-4">Reseñas</h3>
        <div className="space-y-4">
          {professional.reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-4 rounded-lg"
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold">{review.user}</h4>
                <div className="flex items-center">
                  {renderStars(review.rating)}
                  <span className="ml-2 text-sm text-gray-500">
                    {review.date}
                  </span>
                </div>
              </div>
              <p>{review.text}</p>
              <div className="flex justify-end space-x-2 mt-2">
                <button className="text-green-600 flex items-center">
                  <ThumbsUp size={16} className="mr-1" /> Útil
                </button>
                <button className="text-red-600 flex items-center">
                  <ThumbsDown size={16} className="mr-1" /> No útil
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block w-64 bg-white border-r p-4`}>
        <div className="flex items-center mb-8">
          <h1 className="text-2xl font-bold text-blue-600">BuildLink</h1>
        </div>
        
        <nav className="space-y-2">
          {navItems.map((item) => (
            <button 
              key={item.section}
              onClick={() => setActiveSection(item.section)}
              className={`w-full flex items-center p-2 rounded ${
                activeSection === item.section 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'hover:bg-gray-100'
              }`}
            >
              <item.icon className="mr-2" size={20} />
              {item.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <div className="bg-white border-b p-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
            <div className="relative flex-grow">
              <input 
                type="text" 
                placeholder="Buscar profesionales, proyectos..."
                className="w-full pl-10 pr-4 py-2 border rounded-full"
              />
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button><PlusCircle className="text-blue-600" /></button>
            <button><User className="text-gray-600" /></button>
          </div>
        </div>

        {/* Content Sections */}
        {activeSection === 'home' && (
          <div className="p-6">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                Conecta con Profesionales de Construcción
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Encuentra, colabora y crece en la industria de la construcción
              </p>
              <div className="flex justify-center space-x-4">
                <button 
                  onClick={() => setUserRole('empresa')}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                >
                  Registrarme como Empresa
                </button>
                <button 
                  onClick={() => setUserRole('profesional')}
                  className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50"
                >
                  Registrarme como Profesional
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="grid md:grid-cols-5 gap-4 mb-12">
              {categories.map((category, index) => (
                <div 
                  key={index} 
                  className="bg-white border rounded-lg p-4 text-center hover:shadow-md transition"
                >
                  <div className="mx-auto mb-3 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                    <category.icon className="text-blue-600" size={24} />
                  </div>
                  <h3 className="font-semibold">{category.title}</h3>
                  <p className="text-sm text-gray-600">{category.desc}</p>
                </div>
              ))}
            </div>

            {/* Professionals Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Profesionales Destacados</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {professionals.map((professional) => (
                  <div 
                    key={professional.id} 
                    className="bg-white border rounded-lg p-4 hover:shadow-md transition"
                    onClick={() => setSelectedProfessional(professional)}
                  >
                    <div className="flex items-center mb-4">
                      <div className="mr-4">
                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                          <Users className="text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold">{professional.name}</h2>
                        <p className="text-gray-600">{professional.profession}</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        {renderStars(professional.rating)}
                        <span className="ml-2 text-gray-600">
                          {professional.rating}/5
                        </span>
                      </div>
                      <button className="text-blue-600 hover:underline">
                        Ver Perfil
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Feed */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-4">Últimas Publicaciones</h2>
              {posts.map((post, index) => (
                <div key={index} className="bg-white border rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <div>
                      <h4 className="font-semibold">{post.user.name}</h4>
                      <p className="text-sm text-gray-600">{post.user.role}</p>
                    </div>
                  </div>
                  <p className="mb-3">{post.content}</p>
                  <div className="flex justify-between text-sm text-gray-600">
                    <div>
                      <button className="flex items-center mr-4">
                        <Heart className="mr-1" /> {post.likes} Me gusta
                      </button>
                      <button className="flex items-center">
                        <MessageCircle className="mr-1" /> {post.comments} Comentarios
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Placeholder for other sections */}
        {activeSection !== 'home' && (
          <div className="p-6 text-center text-gray-600">
            Sección en desarrollo
          </div>
        )}
      </div>

      {/* Professional Details Modal */}
      {selectedProfessional && (
        <ProfessionalDetails 
          professional={selectedProfessional}
          onClose={() => setSelectedProfessional(null)}
        />
      )}
    </div>
  );
};

export default BuildLinkPlatform;
