import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchFoods() {
            try {
                setLoading(true);
                const response = await axios.get(
                    "https://restaurant-menu-wn6l.onrender.com/foods"
                );
                setItems(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        fetchFoods();
    }, [])

    // Get unique categories dynamically from the loaded food items
    const categories = ['All', ...new Set(items.map(item => item.category))];

    // Filter items based on selected category AND search term
    const filteredItems = items.filter((item) => {
        const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
        const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.category.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (loading) {
        return (
            <div className="loading-screen" id="loading-container">
                <div className="loading-spinner"></div>
                <div className="loading-text">Preparing the menu for you...</div>
            </div>
        )
    }

    return (
        <div className="menu-page-wrapper">
            {/* Restaurant Brand Header */}
            <header className="restaurant-header" id="restaurant-main-header">
                <div className="brand-subtitle">Haute Cuisine</div>
                <h1 className="brand-title">Rolex Dhaba</h1>
                <p className="brand-tagline">
                    An exquisite selection of signature dishes, masterfully curated for refined palates.
                </p>
                <div className="header-divider"></div>
            </header>

            <main className="menu-page-container">
                {/* Search & Category Filter Section */}
                <section className="search-filter-section" aria-label="Menu Filters">
                    <div className="search-wrapper">
                        <span className="search-icon" aria-hidden="true">🔍</span>
                        <input
                            type="text"
                            id="menu-search-input"
                            className="search-input"
                            placeholder="Search our culinary creations..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    <div className="category-filters" id="category-tabs-container">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Foods Menu Grid */}
                <section className="foods-grid" id="foods-menu-grid">
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item) => (
                            <article
                                className="food-card"
                                key={item.id}
                                id={`food-card-${item.id}`}
                                onClick={() => navigate(`/item/${item.id}`)}
                            >
                                <div className="card-image-wrapper">
                                    <img
                                        src={item.image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"}
                                        alt={item.name}
                                        className="food-card-img"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="card-content">
                                    <span className="card-category">{item.category}</span>
                                    <h2 className="card-title">{item.name}</h2>
                                    <div className="card-footer">
                                        <span className="card-price">₹{item.price}</span>
                                        <span className="view-details-link">
                                            View Recipe <span className="arrow-icon">➔</span>
                                        </span>
                                    </div>
                                </div>
                            </article>
                        ))
                    ) : (
                        <div className="no-results" id="no-menu-results">
                            <h2>No culinary masterpieces found</h2>
                            <p>Try refining your search or selecting another category.</p>
                        </div>
                    )}
                </section>
            </main>
        </div>
    )
}

export default Home
