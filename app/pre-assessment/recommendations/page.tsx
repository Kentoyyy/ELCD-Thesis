import React from 'react'

const Recommendations = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 flex flex-col items-center py-12">
      {/* Main content */}
      <main className="container mx-auto px-6 sm:px-12 md:px-24 py-8 bg-white rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">Tailored Recommendations</h1>

        <section className="bg-gray-100 p-8 rounded-xl shadow-sm mb-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Personalized Action Plan</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Based on the assessment, the following personalized action plan has been created to help the child improve in key areas:
          </p>
          <ul className="list-disc pl-5 space-y-3 text-gray-700 text-lg mt-4">
            <li>Focus on daily reading exercises to improve comprehension and fluency.</li>
            <li>Practice fine motor skills through writing exercises and activities.</li>
            <li>Implement short, focused tasks to address attention difficulties, such as 10-15 minute study sessions followed by breaks.</li>
            <li>Use visual aids and tactile learning tools to reinforce concepts.</li>
          </ul>
        </section>

        <section className="bg-gray-100 p-8 rounded-xl shadow-sm mb-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Daily Activities</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Incorporating simple daily activities can greatly support the child’s learning development. Here are some exercises to help improve foundational skills:
          </p>
          <ul className="list-disc pl-5 space-y-3 text-gray-700 text-lg mt-4">
            <li>Reading aloud with a parent or educator, focusing on fluency and understanding.</li>
            <li>Writing short stories or journal entries to practice writing skills and creativity.</li>
            <li>Engaging in educational games that promote attention and focus (e.g., puzzles, memory games).</li>
            <li>Interactive math activities like number recognition and simple math operations.</li>
          </ul>
        </section>

        <section className="bg-gray-100 p-8 rounded-xl shadow-sm mb-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Tools and Apps</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            The following apps and tools are recommended to support learning and help track progress:
          </p>
          <ul className="list-disc pl-5 space-y-3 text-gray-700 text-lg mt-4">
            <li>
              <a href="https://www.readingeggs.com/" target="_blank" className="text-blue-600 hover:underline">
                Reading Eggs
              </a> - A fun, interactive platform for early literacy development.
            </li>
            <li>
              <a href="https://www.khansacademy.org" target="_blank" className="text-blue-600 hover:underline">
                Khan Academy
              </a> - Offers free lessons on various subjects, including reading, math, and more.
            </li>
            <li>
              <a href="https://www.toonblast.com" target="_blank" className="text-blue-600 hover:underline">
                Toon Blast
              </a> - A fun puzzle game that promotes attention and problem-solving.
            </li>
            <li>
              <a href="https://www.sesamestreet.org" target="_blank" className="text-blue-600 hover:underline">
                Sesame Street Games
              </a> - A playful way to learn math, language, and social skills through fun games.
            </li>
          </ul>
        </section>

        <section className="bg-gray-100 p-8 rounded-xl shadow-sm">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Monitoring Progress</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Tracking the child’s progress is essential to ensure that interventions are effective. Here are some tips for parents to monitor progress:
          </p>
          <ul className="list-disc pl-5 space-y-3 text-gray-700 text-lg mt-4">
            <li>Keep a weekly journal to track the child’s focus, behavior, and improvement in reading/writing tasks.</li>
            <li>Use a visual progress chart to mark milestones and achievements.</li>
            <li>Have regular check-ins with the child’s teacher to adjust the action plan as needed.</li>
            <li>Encourage the child to reflect on their progress and celebrate small victories.</li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default Recommendations
