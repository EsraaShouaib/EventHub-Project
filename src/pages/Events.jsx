import React from 'react';
import { Link } from 'react-router-dom';

const Events = () => {
  const events = [
    { 
      id: 1, 
      title: "Tech Conference 2024", 
      date: "2024-03-15", 
      location: "Riyadh",
      description: "Latest trends in technology and innovation",
      image: "/images/event-tech.jpg",
      price: "Free"
    },
    { 
      id: 2, 
      title: "Music Festival", 
      date: "2024-04-20", 
      location: "Jeddah",
      description: "Amazing live performances and artists",
      image: "/images/event-music.jpg",
      price: "$50"
    },
    { 
      id: 3, 
      title: "Business Workshop", 
      date: "2024-05-10", 
      location: "Online",
      description: "Professional development and networking",
      image: "/images/event-business.jpg",
      price: "$25"
    },
    { 
      id: 4, 
      title: "Art Exhibition", 
      date: "2024-06-05", 
      location: "Dubai",
      description: "Contemporary art from local artists",
      image: "/images/event-art.jpg",
      price: "Free"
    },
    { 
      id: 5, 
      title: "Food Festival", 
      date: "2024-07-12", 
      location: "Abu Dhabi",
      description: "Culinary delights from around the world",
      image: "/images/event-food.jpg",
      price: "$35"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Upcoming Events</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map(event => (
            <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{event.title}</h3>
                <p className="text-gray-600 mb-3">{event.description}</p>
                
                <div className="flex justify-between items-center mb-4">
                  <p className="text-gray-600 flex items-center">
                    <span className="mr-2">📅</span> {event.date}
                  </p>
                  <p className="text-green-600 font-semibold">{event.price}</p>
                </div>
                
                <p className="text-gray-600 mb-4 flex items-center">
                  <span className="mr-2">📍</span> {event.location}
                </p>
                
                <div className="flex space-x-2">
                  <Link 
                    to={`/events/${event.id}`}
                    className="flex-1 bg-gray-200 text-gray-700 text-center py-2 rounded hover:bg-gray-300 transition duration-300"
                  >
                    View Details
                  </Link>
                  <Link 
                    to={`/register/${event.id}`}
                    className="flex-1 bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition duration-300"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;