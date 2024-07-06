import { PostProps } from "../../../interfaces/types";

export const PostsData: PostProps[] = [
    {
        title: 'Rediseño de sitio web corporativo',
        description: 'Proyecto de rediseño completo del sitio web para mejorar la experiencia del usuario.',
        category: 'Desarrollo Web',
        createAt: 'Hace 2 días',
        imageProfileUrl: 'https://randomuser.me/api/portraits/women/65.jpg',
        userName: 'Laura Gómez',
        images: ['https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'],
        profession: 'Diseñadora Gráfica',
        ubicacion: 'Buenos Aires, Argentina'
    },
    {
        title: 'Aplicación móvil de fitness',
        description: 'Desarrollo de una aplicación móvil para seguimiento de ejercicios y nutrición.',
        category: 'Desarrollo Móvil',
        createAt: 'Hace 3 días',
        imageProfileUrl: 'https://randomuser.me/api/portraits/men/45.jpg',
        userName: 'Carlos Mendoza',
        images: ['https://images.pexels.com/photos/3763877/pexels-photo-3763877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'],
        profession: 'Desarrollador de Aplicaciones Móviles',
        ubicacion: 'Barcelona, España'
    },
    {
        title: 'Sesión de fotos para catálogo de moda',
        description: 'Fotografías profesionales para el nuevo catálogo de una marca de moda.',
        category: 'Fotografía',
        createAt: 'Hace 1 semana',
        imageProfileUrl: 'https://randomuser.me/api/portraits/women/45.jpg',
        userName: 'Sofía Rodríguez',
        images: ['https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'],
        profession: 'Fotógrafa',
        ubicacion: 'Santiago, Chile'
    }
];
