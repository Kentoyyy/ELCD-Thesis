import React from 'react'

const Insights = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 flex flex-col items-center py-12">
      {/* Main content */}
      <main className="container mx-auto px-6 sm:px-12 md:px-24 py-8 bg-white rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">Learning Insights</h1>

        <section className="bg-gray-100 p-8 rounded-xl shadow-sm mb-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Assessment Summary</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            The assessment has revealed several key challenges the child faces in learning. These challenges include difficulties with reading comprehension, struggles with fine motor skills in writing, and challenges in staying focused during tasks. Based on the responses, it appears the child may benefit from additional support in areas of reading and writing development.
          </p>
        </section>

        <section className="bg-gray-100 p-8 rounded-xl shadow-sm mb-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Learning Patterns</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Several patterns have emerged from the assessment responses, including signs of dyslexia, such as letter reversals and difficulty with decoding words. Attention-related challenges, such as difficulty staying on task for extended periods, were also noted. Understanding these patterns helps in tailoring interventions to support the child more effectively.
          </p>
        </section>

        <section className="bg-gray-100 p-8 rounded-xl shadow-sm mb-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Educational Context</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            The identified learning patterns are impacting the child's academic performance, particularly in subjects requiring reading and writing. The difficulties with focus and comprehension may affect social interactions as well, as the child may struggle with group activities or following classroom discussions. Understanding these challenges is the first step toward providing appropriate support both at home and in the classroom.
          </p>
        </section>

        <section className="bg-gray-100 p-8 rounded-xl shadow-sm">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Resources and Strategies</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            To assist both parents and educators, here are a few recommended resources and strategies:
          </p>
          <ul className="space-y-4 text-lg">
            <li className="flex items-center space-x-2">
              <span className="text-blue-600">&#10003;</span>
              <a href="https://www.dyslexiahelp.umich.edu/professionals/dyslexia-school/overview" target="_blank" className="text-blue-600 hover:underline">
                Understanding Dyslexia: A Guide for Parents and Educators
              </a> - A comprehensive guide to dyslexia and effective strategies for support.
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-600">&#10003;</span>
              <a href="https://www.understood.org/en/school-learning/partnering-with-childs-school" target="_blank" className="text-blue-600 hover:underline">
                Partnering with Your Child's School
              </a> - Tips for working with teachers and other school professionals to provide tailored support.
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-600">&#10003;</span>
              <a href="https://www.youtube.com/watch?v=_g8n0H2f6aw" target="_blank" className="text-blue-600 hover:underline">
                Video on Dyslexia and Attention Issues
              </a> - A helpful video that explains common learning patterns and strategies for addressing them.
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default Insights
