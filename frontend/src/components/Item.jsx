import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Item() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchItem() {
            try {
                setLoading(true)
                const response = await axios.get(`https://restaurant-menu-wn6l.onrender.com/foods${id}`)
                setItem(response.data)
            } catch (err) {
                setError('Unable to load recipe details. Please try again.')
            } finally {
                setLoading(false)
            }
        }

        if (id) {
            fetchItem()
        }
    }, [id])

    if (loading) {
        return (
            <div className="loading-screen" id="loading-container">
                <div className="loading-spinner"></div>
                <div className="loading-text">Crafting recipe details...</div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="error-screen" id="error-container">
                <h2>An Error Occurred</h2>
                <p>{error}</p>
                <button className="back-btn" onClick={() => navigate('/')}>
                    ➔ Back to Menu
                </button>
            </div>
        )
    }

    if (!item) {
        return (
            <div className="error-screen" id="not-found-container">
                <h2>Dish Not Found</h2>
                <p>We could not find the recipe or dish you are looking for.</p>
                <button className="back-btn" onClick={() => navigate('/')}>
                    ➔ Back to Menu
                </button>
            </div>
        )
    }

    return (
        <div className="detail-page-wrapper">
            {/* Top Navigation */}
            <div className="navigation-header">
                <button className="back-btn" onClick={() => navigate('/')} id="back-to-menu-btn">
                    ← Back to Menu
                </button>
            </div>

            {/* Main Details Presentation Grid */}
            <main className="item-detail-grid" id={`food-detail-card-${item.id}`}>
                {/* Visual Showcase (Left) */}
                <div className="detail-visuals">
                    <span className="detail-category-badge">{item.category}</span>
                    <img
                        src={item.image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"}
                        alt={item.name}
                        className="detail-img"
                    />
                    <div className="detail-visual-overlay"></div>
                </div>

                {/* Info and Chef Recipe Steps (Right) */}
                <div className="detail-info">
                    <h1 className="detail-name">{item.name}</h1>

                    <div className="detail-rating" aria-label="Rating: 5 out of 5 stars">
                        ★★★★★ <span style={{ color: 'var(--text-muted)', marginLeft: '8px', fontSize: '0.85rem' }}>(4.9 / 5.0 Rating)</span>
                    </div>

                    <div className="detail-price-row">
                        <span className="detail-price-label">Price</span>
                        <span className="detail-price-val">₹{item.price}</span>
                    </div>

                    <section className="prep-section" aria-label="Preparation steps">
                        <h2 className="prep-heading">Chef's Preparation</h2>
                        <ol className="prep-steps-list">
                            {item.preparation && item.preparation.length > 0 ? (
                                item.preparation.map((prep, index) => (
                                    <li key={index} className="prep-step-item">
                                        <span className="prep-step-num">{index + 1}</span>
                                        <span className="prep-step-text">{prep}</span>
                                    </li>
                                ))
                            ) : (
                                <li className="prep-step-item">
                                    <span className="prep-step-text" style={{ fontStyle: 'italic' }}>
                                        No preparation steps documented.
                                    </span>
                                </li>
                            )}
                        </ol>
                    </section>

                    {/* Dining Booking / Order Mock Panel */}
                    <div className="order-action-panel">
                        <button
                            className="btn-order-now"
                            onClick={() => alert(`Your table reservation has been requested for: ${item.name}. Our hostess will contact you shortly!`)}
                            id="order-dish-btn"
                        >
                            Reserve / Pre-Order Dish
                        </button>
                        <button
                            className="btn-wishlist"
                            title="Save to Favorites"
                            onClick={(e) => {
                                e.currentTarget.style.color = '#e25c5c';
                                e.currentTarget.style.borderColor = '#e25c5c';
                                e.currentTarget.style.backgroundColor = 'rgba(226, 92, 92, 0.05)';
                            }}
                        >
                            ♥
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}
