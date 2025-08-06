import { useState } from "react";
// import { FaHeart, FaTrash } from "react-icons/fa";
import { Dialog } from "@headlessui/react";

const Articles = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isReadMoreModalOpen, setIsReadMoreModalOpen] = useState(false);
  const [newArticle, setNewArticle] = useState({
    title: "",
    category: "cardiology",
    image: "",
    author: "",
    summary: "",
  });

  // Sample articles data with more realistic content
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "Understanding Heart Health: A Comprehensive Guide",
      category: "cardiology",
      image:
        "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=2070",
      author: "Dr. Sarah Johnson",
      date: "March 15, 2024",
      summary:
        "Discover the essential aspects of maintaining a healthy heart, including diet, exercise, and lifestyle changes that can prevent cardiovascular diseases.",
    },
    {
      id: 2,
      title: "Advances in Neurological Treatment",
      category: "neurology",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2069",
      author: "Dr. Michael Chen",
      date: "March 14, 2024",
      summary:
        "Explore the latest breakthroughs in neurological treatments, including new therapies for conditions like Alzheimer's and Parkinson's disease.",
    },
    {
      id: 3,
      title: "Pediatric Vaccination Schedule Updates",
      category: "pediatrics",
      image:
        "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2091",
      author: "Dr. Emily Rodriguez",
      date: "March 13, 2024",
      summary:
        "Stay informed about the latest updates to childhood vaccination schedules and why they're crucial for your child's health.",
    },
    {
      id: 4,
      title: "Mindfulness and Mental Health",
      category: "wellness",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020",
      author: "Dr. James Wilson",
      date: "March 12, 2024",
      summary:
        "Learn how mindfulness practices can improve mental health, reduce stress, and enhance overall well-being.",
    },
    {
      id: 5,
      title: "Modern Surgical Techniques in Cardiology",
      category: "cardiology",
      image:
        "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070",
      author: "Dr. Robert Smith",
      date: "March 11, 2024",
      summary:
        "An overview of cutting-edge surgical procedures in cardiovascular medicine and their impact on patient recovery.",
    },
    {
      id: 6,
      title: "Child Development Milestones",
      category: "pediatrics",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2072",
      author: "Dr. Lisa Anderson",
      date: "March 10, 2024",
      summary:
        "Understanding key developmental milestones in children and when to consult with healthcare professionals.",
    },
    {
      id: 7,
      title: "Stress Management Techniques",
      category: "wellness",
      image:
        "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070",
      author: "Dr. Rachel Green",
      date: "March 9, 2024",
      summary:
        "Effective strategies for managing stress and anxiety in today's fast-paced world.",
    },
    {
      id: 8,
      title: "Brain Health and Aging",
      category: "neurology",
      image:
        "https://images.unsplash.com/photo-1559757175-7b21e7ecc3c5?q=80&w=2070",
      author: "Dr. David Park",
      date: "March 8, 2024",
      summary:
        "Understanding cognitive health and preventive measures for age-related neurological conditions.",
    },
  ]);

  const categories = [
    { id: "all", name: "All Articles" },
    { id: "cardiology", name: "Cardiology" },
    { id: "neurology", name: "Neurology" },
    { id: "pediatrics", name: "Pediatrics" },
    { id: "wellness", name: "Wellness" },
  ];

  const handleAddArticle = (e) => {
    e.preventDefault();
    const date = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    setArticles([
      ...articles,
      {
        id: articles.length + 1,
        ...newArticle,
        date,
      },
    ]);

    setNewArticle({
      title: "",
      category: "cardiology",
      image: "",
      author: "",
      summary: "",
    });
    setIsAddModalOpen(false);
  };

  const handleReadMore = (article) => {
    setSelectedArticle({
      ...article,
      content: `
        <h2 class="text-2xl font-bold mb-4">Introduction</h2>
        <p class="mb-4">${article.summary}</p>
        
        <h2 class="text-2xl font-bold mb-4">Key Points</h2>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">Understanding ${article.category} is crucial for better healthcare outcomes.</li>
          <li class="mb-2">Recent studies have shown significant advances in this field.</li>
          <li class="mb-2">Preventive measures and early detection play vital roles.</li>
        </ul>

        <h2 class="text-2xl font-bold mb-4">Detailed Analysis</h2>
        <p class="mb-4">Recent medical advances in ${article.category} have revolutionized how we approach treatment. Experts like ${article.author} have contributed significantly to this field.</p>

        <h2 class="text-2xl font-bold mb-4">Recommendations</h2>
        <p class="mb-4">It's recommended to consult with healthcare professionals for personalized advice. Regular check-ups and preventive care are essential for maintaining optimal health.</p>

        <h2 class="text-2xl font-bold mb-4">Conclusion</h2>
        <p>Staying informed about developments in ${article.category} helps make better healthcare decisions. Consult with your healthcare provider for specific medical advice.</p>
      `,
    });
    setIsReadMoreModalOpen(true);
  };

  const filteredArticles =
    selectedCategory === "all"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      {/* Header Section */}
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Medical Articles & Resources
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Stay informed with the latest medical research, health tips, and
            expert insights
          </p>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="px-6 py-2 mt-6 text-white transition-colors bg-blue-600 rounded-full hover:bg-blue-700"
          >
            Add New Article
          </button>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-blue-50"
              } border border-gray-200 shadow-sm`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="overflow-hidden transition-all duration-300 transform bg-white shadow-sm cursor-pointer rounded-xl hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-40">
                <img
                  src={article.image}
                  alt={article.title}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center mb-3">
                  <span className="px-2 py-1 text-xs text-blue-800 bg-blue-100 rounded-full">
                    {article.category.charAt(0).toUpperCase() +
                      article.category.slice(1)}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 line-clamp-2 hover:text-blue-600">
                  {article.title}
                </h3>
                <p className="mb-3 text-sm text-gray-600 line-clamp-3">
                  {article.summary}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{article.author}</span>
                  <span>{article.date}</span>
                </div>
                <button
                  onClick={() => handleReadMore(article)}
                  className="mt-3 w-full bg-blue-600 text-white py-1.5 px-3 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <div className="py-12 text-center">
            <h3 className="text-xl text-gray-600">
              No articles found in this category.
            </h3>
          </div>
        )}

        {/* Read More Modal */}
        <Dialog
          open={isReadMoreModalOpen}
          onClose={() => setIsReadMoreModalOpen(false)}
          className="relative z-50"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="mx-auto max-w-3xl bg-white rounded-xl p-6 w-full max-h-[90vh] overflow-y-auto">
              {selectedArticle && (
                <>
                  <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
                    <img
                      src={selectedArticle.image}
                      alt={selectedArticle.title}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="mb-6">
                    <span className="px-3 py-1 text-sm text-blue-800 bg-blue-100 rounded-full">
                      {selectedArticle.category.charAt(0).toUpperCase() +
                        selectedArticle.category.slice(1)}
                    </span>
                  </div>

                  <h2 className="mb-4 text-3xl font-bold">
                    {selectedArticle.title}
                  </h2>

                  <div className="flex items-center justify-between mb-6 text-gray-600">
                    <span className="font-medium">
                      {selectedArticle.author}
                    </span>
                    <span>{selectedArticle.date}</span>
                  </div>

                  <div
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{
                      __html: selectedArticle.content,
                    }}
                  />

                  <div className="flex justify-end mt-8">
                    <button
                      onClick={() => setIsReadMoreModalOpen(false)}
                      className="px-4 py-2 text-gray-700 transition-colors bg-gray-100 rounded-lg hover:bg-gray-200"
                    >
                      Close
                    </button>
                  </div>
                </>
              )}
            </Dialog.Panel>
          </div>
        </Dialog>

        {/* Add Article Modal */}
        <Dialog
          open={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          className="relative z-50"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-xl p-6 mx-auto bg-white rounded-xl">
              <Dialog.Title className="mb-6 text-2xl font-bold">
                Add New Article
              </Dialog.Title>

              <form onSubmit={handleAddArticle} className="space-y-4">
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <input
                    type="text"
                    required
                    value={newArticle.title}
                    onChange={(e) =>
                      setNewArticle({ ...newArticle, title: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <select
                    value={newArticle.category}
                    onChange={(e) =>
                      setNewArticle({ ...newArticle, category: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  >
                    {categories
                      .filter((cat) => cat.id !== "all")
                      .map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                  </select>
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Image URL
                  </label>
                  <input
                    type="url"
                    required
                    value={newArticle.image}
                    onChange={(e) =>
                      setNewArticle({ ...newArticle, image: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Author
                  </label>
                  <input
                    type="text"
                    required
                    value={newArticle.author}
                    onChange={(e) =>
                      setNewArticle({ ...newArticle, author: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Summary
                  </label>
                  <textarea
                    required
                    value={newArticle.summary}
                    onChange={(e) =>
                      setNewArticle({ ...newArticle, summary: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    rows="4"
                  />
                </div>

                <div className="flex justify-end pt-4 space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                  >
                    Add Article
                  </button>
                </div>
              </form>
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default Articles;
