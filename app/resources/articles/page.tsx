import React from "react";
import articleimage from "../../../public/images/articleimage.jpg";
import Footer from "../../components/Footer";

const BlogPost: React.FC = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <div className="bg-white shadow">
                <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row items-center">
                    <div className="lg:w-2/3">
                        <p className="text-sm text-gray-500 uppercase">Blog • Articles</p>
                        <h1 className="mt-2 text-4xl font-bold text-gray-800 leading-tight">
                            The Three Types of Specific Learning Disabilities: Dyslexia, Dysgraphia, and Dyscalculia
                        </h1>
                        <p className="mt-4 text-gray-600">
                            Learn about this article.<br></br>
                            [November, 2024]
                        </p>
                    </div>
                    <div className="lg:w-1/3 mt-6 lg:mt-0 flex justify-center">
                        <img
                            src={articleimage.src}
                            alt="Learning Disabilities"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row gap-8">
                {/* Blog Content */}
                <div className="lg:w-2/3">
                    <article>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            There’s nothing as heartbreaking as watching one of your most dedicated students try and fail to grasp a school subject. A student struggling with reading, writing, or math can be overwhelmed by feelings of frustration and embarrassment. They may feel helpless or avoid participating in class. They may even act out to draw attention away from their shortcomings. But what if their behavior is a response to an undiagnosed problem, one affecting one-third of students with disabilities?
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            A specific learning disability is a disorder of one or more psychological processes involved in language acquisition, manifesting as an “imperfect ability to listen, think, speak, read, write, spell, or do mathematical calculations.” No wonder students with learning disabilities can have a hard time in class; their own psychological processes are working against them. Educators must be on the lookout for signs of the three types of specific learning disabilities: dyslexia, dysgraphia, and dyscalculia.
                        </p>

                        {/* Dyslexia Section */}
                        <h2 id="dyslexia" className="text-2xl font-semibold text-gray-800 mb-4">Dyslexia</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Dyslexia impairs a person’s ability to decode, or associate letters and words with their corresponding speech sounds. Consequently, reading becomes slow and laborious, even for students who’ve mastered basic reading skills. Dyslexia can also impair writing and spelling skills, and some students with dyslexia will mix up similar-looking letters like “b” and “d.”
                        </p>
                        <ul className="list-disc list-inside text-gray-600 mb-6">
                            <li>Copying written language.</li>
                            <li>Expressing themselves in spoken language.</li>
                            <li>Noticing differences and similarities in letters and words.</li>
                            <li>Remembering sequences, such as the days of the week.</li>
                            <li>Sounding out unfamiliar words.</li>
                        </ul>

                        {/* Dysgraphia Section */}
                        <h2 id="dysgraphia" className="text-2xl font-semibold text-gray-800 mb-4">Dysgraphia</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Both dyslexia and dysgraphia are characterized by writing difficulties, but dysgraphia interferes with all aspects of writing, including spelling, grammar, and punctuation. Students with dysgraphia tend to write in an awkward position, gripping their pencil in a clenched fist.
                        </p>

                        {/* Dyscalculia Section */}
                        <h2 id="dyscalculia" className="text-2xl font-semibold text-gray-800 mb-4">Dyscalculia</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Referred to as “number dyslexia,” dyscalculia impairs a person’s ability to learn number-related concepts or perform calculations with symbols and functions. Without a clear understanding of numbers, students with dyscalculia must sometimes rely on finger-counting to perform even simple calculations.
                        </p>
                        <ul className="list-disc list-inside text-gray-600 mb-6">
                            <li>Counting backward.</li>
                            <li>Memorizing basic calculations.</li>
                            <li>Performing mental math.</li>
                            <li>Recalling basic math facts.</li>
                            <li>Using math symbols.</li>
                        </ul>
                    </article>

                    {/* Sources Section */}
                    <div className="mt-12">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Sources</h3>
                        <ul className="list-disc list-inside text-blue-600">
                            <li>
                                <a href="https://www.mayoclinic.org/diseases-conditions/dyslexia/symptoms-causes/syc-20353552" target="_blank" rel="noopener noreferrer">
                                    Dyslexia: Symptoms-causes
                                </a>
                            </li>
                            <li>
                                <a href="https://www.psychiatry.org/patients-families/specific-learning-disorder/what-is-specific-learning-disorder" target="_blank" rel="noopener noreferrer">
                                    What is specific learning disorder
                                </a>
                            </li>
                            <li>
                                <a href="https://www.additudemag.com/what-is-dysgraphia-understanding-common-symptoms/" target="_blank" rel="noopener noreferrer">
                                    Understanding common symptoms
                                </a>
                            </li>
                            <li>
                                <a href="https://online.utpb.edu/about-us/articles/education/the-three-types-of-specific-learning-disabilities-dyslexia-dysgraphia-and-dyscalculia/" target="_blank" rel="noopener noreferrer">
                                    online.utpb.edu/about-us/articles
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="lg:w-1/3">
                    {/* Table of Contents */}
                    <div className="bg-white shadow rounded-lg p-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-800">Table of Contents</h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <a href="#dyslexia" className="text-blue-600 hover:underline">Dyslexia</a>
                            </li>
                            <li>
                                <a href="#dysgraphia" className="text-blue-600 hover:underline">Dysgraphia</a>
                            </li>
                            <li>
                                <a href="#dyscalculia" className="text-blue-600 hover:underline">Dyscalculia</a>
                            </li>
                        </ul>
                    </div>

                    {/* Related Topics */}
                    <div className="bg-white shadow rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-800">Related Topics</h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <a href="#" className="flex items-center space-x-3">
                                    <img
                                        src="https://via.placeholder.com/50"
                                        alt="Related topic"
                                        className="w-12 h-12 rounded-lg object-cover"
                                    />
                                    <span className="text-gray-800 hover:underline">Understanding ADHD in Students</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center space-x-3">
                                    <img
                                        src="https://via.placeholder.com/50"
                                        alt="Related topic"
                                        className="w-12 h-12 rounded-lg object-cover"
                                    />
                                    <span className="text-gray-800 hover:underline">Inclusive Classroom Practices</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default BlogPost;
