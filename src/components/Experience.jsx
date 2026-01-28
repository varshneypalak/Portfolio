import React, { useEffect, useState } from 'react'

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('experience')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])
  const experiences = [
    {
      id: 1,
      role: 'Software Development Engineer Intern (Backend)',
      company: 'GeeksforGeeks',
      duration: 'June 2025 – Present',
      type: 'On-Site',
      achievements: [
        'Integrated AWS Bedrock (Nova model) into the backend to build an asynchronous article summarization pipeline, handling request orchestration, response validation, and failure scenarios.',
        'Designed and optimized high-performance Django REST APIs, reducing response latency from 55s to 2–3s (95% improvement) by eliminating N+1 queries, introducing query batching, and optimizing ORM usage.',
        'Reduced database load by cutting query count from 56 to 15 (73% reduction) through efficient joins, selective indexing, and refactored data access patterns.',
        'Implemented database connection pooling in Django using django-db-connection-pool, improving connection reuse, stabilizing high-concurrency traffic, and lowering per-request database overhead.',
        'Optimized a high-traffic production API, reducing redundant requests from approximately 10,000/day to 100/day using caching, request deduplication, and improved query design.',
        'Improved backend-driven performance of the comment system by optimizing initialization workflows and lazy-loading heavy dependencies, reducing load time from 4–5s to 1–2s.'
      ]
    }
  ]

  return (
    <div id='experience' className='w-full py-20 relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl'></div>
      
      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInDown' : 'opacity-0'}`}>
          <h2 className='text-5xl md:text-6xl font-bold text-gradient mb-4'>Experience</h2>
          <p className='text-xl text-gray-400'>My professional journey in software development</p>
        </div>

        <div className='max-w-4xl mx-auto'>
          {experiences.map(({ id, role, company, duration, type, achievements }) => (
            <div 
              key={id} 
              className={`glass-effect rounded-2xl p-8 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 border-l-4 border-purple-500 hover-lift relative overflow-hidden group ${
                isVisible ? 'animate-slideInRight' : 'opacity-0'
              }`}
            >
              {/* Hover Shimmer Effect */}
              <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                <div className='absolute inset-0 animate-shimmer'></div>
              </div>
              
              <div className='mb-6 relative z-10'>
                <div className='flex items-start justify-between mb-4'>
                  <div>
                    <h3 className='text-3xl font-bold text-white mb-2 group-hover:text-gradient transition-all'>{role}</h3>
                    <p className='text-2xl text-gradient font-semibold mb-3 animate-gradient'>{company}</p>
                  </div>
                  <div className='glass-effect px-4 py-2 rounded-full animate-pulse-glow'>
                    <span className='text-green-400 font-semibold'>Active</span>
                  </div>
                </div>
                <div className='flex flex-wrap gap-4 text-gray-400'>
                  <span className='flex items-center gap-2 glass-effect px-3 py-1 rounded-full'>
                    <span className='w-2 h-2 bg-blue-500 rounded-full animate-pulse'></span>
                    {duration}
                  </span>
                  <span className='glass-effect px-3 py-1 rounded-full'>{type}</span>
                </div>
              </div>
              <ul className='space-y-4 relative z-10'>
                {achievements.map((achievement, idx) => (
                  <li 
                    key={idx} 
                    className={`flex gap-3 text-gray-300 hover:text-white transition-all duration-300 group/item ${
                      isVisible ? 'animate-fadeInUp' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${0.5 + idx * 0.1}s` }}
                  >
                    <span className='text-purple-400 mt-1 group-hover/item:scale-125 group-hover/item:rotate-90 transition-all duration-300'>▹</span>
                    <span className='leading-relaxed'>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
