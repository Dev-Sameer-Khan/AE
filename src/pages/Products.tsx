import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Link, useSearchParams } from 'react-router-dom';
import { useI18n } from '../context/I18nContext';
import { products, brands, categories } from '../data/products';
import { Search, Filter, X } from 'lucide-react';
import Seo from '../components/Seo';

const Products = () => {
  const { t, language, dir } = useI18n();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const selectedCategory = searchParams.get('category') || 'all';
  const selectedBrand = searchParams.get('brand') || 'all';

  const handleCategoryChange = (category: string) => {
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const handleBrandChange = (brand: string) => {
    if (brand === 'all') {
      searchParams.delete('brand');
    } else {
      searchParams.set('brand', brand);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesBrand = selectedBrand === 'all' || product.brand === selectedBrand;
      const matchesSearch = product.name[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.description[language].toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesBrand && matchesSearch;
    });
  }, [selectedCategory, selectedBrand, searchQuery, language]);

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <Seo
        title="Products | Ameera Enterprises"
        description="Browse engines, compressors, spare parts, filters, and maintenance kits. Filter by category and brand to find the right part fast."
        canonicalPath={`/products${searchParams.toString() ? `?${searchParams.toString()}` : ''}`}
      />
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-navy)] mb-4">
            {t('nav.products')}
          </h1>
          <div className="w-20 h-1 bg-[var(--color-orange)] mx-auto rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <button
            className="lg:hidden flex items-center justify-center gap-2 w-full py-3 bg-white border border-slate-200 rounded-lg text-slate-700 font-semibold"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter size={20} />
            Filters
          </button>

          {/* Sidebar Filters */}
          <div className={`lg:w-1/4 ${isFilterOpen ? 'block' : 'hidden'} lg:block`}>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 sticky top-28">
              <div className="flex justify-between items-center mb-6 lg:hidden">
                <h3 className="font-bold text-lg text-[var(--color-navy)]">Filters</h3>
                <button onClick={() => setIsFilterOpen(false)}><X size={20} /></button>
              </div>

              {/* Search */}
              <div className="mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder={t('product.search')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)]/50 transition-all text-sm"
                  />
                  <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="font-bold text-[var(--color-navy)] mb-4 uppercase text-xs tracking-wider">
                  {t('product.category')}
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === 'all'}
                      onChange={() => handleCategoryChange('all')}
                      className="w-4 h-4 text-[var(--color-orange)] focus:ring-[var(--color-orange)] border-slate-300"
                    />
                    <span className={`text-sm group-hover:text-[var(--color-orange)] transition-colors ${selectedCategory === 'all' ? 'text-[var(--color-orange)] font-medium' : 'text-slate-600'}`}>
                      {t('product.allCategories')}
                    </span>
                  </label>
                  {categories.map((category) => (
                    <label key={category} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === category}
                        onChange={() => handleCategoryChange(category)}
                        className="w-4 h-4 text-[var(--color-orange)] focus:ring-[var(--color-orange)] border-slate-300"
                      />
                      <span className={`text-sm group-hover:text-[var(--color-orange)] transition-colors ${selectedCategory === category ? 'text-[var(--color-orange)] font-medium' : 'text-slate-600'}`}>
                        {category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div>
                <h3 className="font-bold text-[var(--color-navy)] mb-4 uppercase text-xs tracking-wider">
                  {t('product.brand')}
                </h3>
                <div className="space-y-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="brand"
                      checked={selectedBrand === 'all'}
                      onChange={() => handleBrandChange('all')}
                      className="w-4 h-4 text-[var(--color-orange)] focus:ring-[var(--color-orange)] border-slate-300"
                    />
                    <span className={`text-sm group-hover:text-[var(--color-orange)] transition-colors ${selectedBrand === 'all' ? 'text-[var(--color-orange)] font-medium' : 'text-slate-600'}`}>
                      {t('product.allBrands')}
                    </span>
                  </label>
                  {brands.map((brand) => (
                    <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="brand"
                        checked={selectedBrand === brand}
                        onChange={() => handleBrandChange(brand)}
                        className="w-4 h-4 text-[var(--color-orange)] focus:ring-[var(--color-orange)] border-slate-300"
                      />
                      <span className={`text-sm group-hover:text-[var(--color-orange)] transition-colors ${selectedBrand === brand ? 'text-[var(--color-orange)] font-medium' : 'text-slate-600'}`}>
                        {brand}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:w-3/4">
            {filteredProducts.length === 0 ? (
              <div className="bg-white p-12 rounded-2xl text-center border border-slate-100">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                  <Search size={24} />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2">No products found</h3>
                <p className="text-slate-500">Try adjusting your filters or search query.</p>
                <button
                  onClick={() => {
                    handleCategoryChange('all');
                    handleBrandChange('all');
                    setSearchQuery('');
                  }}
                  className="mt-6 px-6 py-2 bg-[var(--color-navy)] text-white rounded-lg text-sm font-semibold hover:bg-[var(--color-navy-light)] transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
              >
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full"
                  >
                    <div className="relative h-56 overflow-hidden bg-slate-100">
                      <img
                        src={product.image}
                        alt={product.name[language]}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[var(--color-navy)]">
                        {product.brand}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="text-xs font-medium text-[var(--color-orange)] mb-2 uppercase tracking-wider">
                        {product.category}
                      </div>
                      <h3 className="text-lg font-bold text-[var(--color-navy)] mb-3 line-clamp-2">
                        {product.name[language]}
                      </h3>
                      <p className="text-slate-500 text-sm mb-6 line-clamp-2 flex-grow">
                        {product.description[language]}
                      </p>
                      <Link
                        to={`/products/${product.id}`}
                        className="inline-flex items-center justify-center w-full py-3 bg-slate-50 text-[var(--color-navy)] font-semibold rounded-lg group-hover:bg-[var(--color-navy)] group-hover:text-white transition-colors duration-300 mt-auto"
                      >
                        View Details
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
