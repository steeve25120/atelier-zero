import {
  useMemo,
  useState,
} from "react";
import ProductCard from "../components/ProductCard";
import {
  categories,
  products,
} from "../data/products";

function sizeHasStock(
  product,
  size
) {
  if (product.soldOut) {
    return false;
  }

  return product.variants.some(
    (variant) => {
      if (
        !variant.sizes.includes(size)
      ) {
        return false;
      }

      const value =
        variant.stock?.[size];

      if (
        typeof value === "boolean"
      ) {
        return value;
      }

      return Number(value) > 0;
    }
  );
}

function productHasStock(product) {
  if (product.soldOut) {
    return false;
  }

  return product.variants.some(
    (variant) =>
      variant.sizes.some(
        (size) => {
          const value =
            variant.stock?.[size];

          if (
            typeof value ===
            "boolean"
          ) {
            return value;
          }

          return Number(value) > 0;
        }
      )
  );
}

const sizes = [
  "All",
  ...new Set(
    products.flatMap((product) =>
      product.variants.flatMap(
        (variant) =>
          variant.sizes
      )
    )
  ),
];

export default function Shop() {
  const [
    activeCategory,
    setActiveCategory,
  ] = useState("All");

  const [
    activeSize,
    setActiveSize,
  ] = useState("All");

  const [
    availability,
    setAvailability,
  ] = useState("all");

  const [
    search,
    setSearch,
  ] = useState("");

  const [
    sort,
    setSort,
  ] = useState("newest");

  const filteredProducts =
    useMemo(() => {
      let result = [
        ...products,
      ];

      if (
        activeCategory !== "All"
      ) {
        result = result.filter(
          (product) =>
            product.category ===
            activeCategory
        );
      }

      if (
        activeSize !== "All"
      ) {
        result = result.filter(
          (product) =>
            sizeHasStock(
              product,
              activeSize
            )
        );
      }

      if (
        availability ===
        "available"
      ) {
        result = result.filter(
          productHasStock
        );
      }

      if (
        availability ===
        "soldout"
      ) {
        result = result.filter(
          (product) =>
            !productHasStock(product)
        );
      }

      if (search.trim()) {
        const query =
          search
            .trim()
            .toLowerCase();

        result = result.filter(
          (product) =>
            product.name
              .toLowerCase()
              .includes(query)
        );
      }

      if (sort === "newest") {
        result.sort(
          (a, b) =>
            b.id - a.id
        );
      }

      if (
        sort === "price-low"
      ) {
        result.sort(
          (a, b) =>
            a.price - b.price
        );
      }

      if (
        sort === "price-high"
      ) {
        result.sort(
          (a, b) =>
            b.price - a.price
        );
      }

      return result;
    }, [
      activeCategory,
      activeSize,
      availability,
      search,
      sort,
    ]);

  const resetFilters = () => {
    setActiveCategory("All");
    setActiveSize("All");
    setAvailability("all");
    setSearch("");
    setSort("newest");
  };

  return (
    <section className="shop-page shop-page--soft page-shell">
      <header className="shop-intro-soft">
        <div>
          <p className="soft-kicker">
            PROJECT GENESIS
          </p>

          <h1>Shop</h1>
        </div>

        <p>
          Découvrez toutes les pièces
          Atelier Zéro.
        </p>
      </header>

      <div className="shop-controls">
        <div className="shop-search">
          <input
            type="search"
            value={search}
            onChange={(event) =>
              setSearch(
                event.target.value
              )
            }
            placeholder="Rechercher un produit..."
            aria-label="Rechercher un produit"
          />
        </div>

        <div className="shop-filter-row">
          <div className="shop-filter-group">
            <span>Catégorie</span>

            <div>
              {categories.map(
                (category) => (
                  <button
                    type="button"
                    key={category}
                    className={
                      activeCategory ===
                      category
                        ? "active"
                        : ""
                    }
                    onClick={() =>
                      setActiveCategory(
                        category
                      )
                    }
                  >
                    {category}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="shop-filter-group">
            <span>Taille</span>

            <div>
              {sizes.map(
                (size) => (
                  <button
                    type="button"
                    key={size}
                    className={
                      activeSize ===
                      size
                        ? "active"
                        : ""
                    }
                    onClick={() =>
                      setActiveSize(
                        size
                      )
                    }
                  >
                    {size}
                  </button>
                )
              )}
            </div>
          </div>
        </div>

        <div className="shop-filter-bottom">
          <div className="shop-availability">
            <button
              type="button"
              className={
                availability === "all"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setAvailability("all")
              }
            >
              Tous
            </button>

            <button
              type="button"
              className={
                availability ===
                "available"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setAvailability(
                  "available"
                )
              }
            >
              Disponibles
            </button>

            <button
              type="button"
              className={
                availability ===
                "soldout"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setAvailability(
                  "soldout"
                )
              }
            >
              Sold out
            </button>
          </div>

          <div className="shop-sort">
            <span>
              {filteredProducts.length}{" "}
              produit
              {filteredProducts.length >
              1
                ? "s"
                : ""}
            </span>

            <select
              value={sort}
              onChange={(event) =>
                setSort(
                  event.target.value
                )
              }
            >
              <option value="newest">
                Nouveautés
              </option>

              <option value="price-low">
                Prix croissant
              </option>

              <option value="price-high">
                Prix décroissant
              </option>
            </select>

            <button
              type="button"
              className="shop-reset"
              onClick={resetFilters}
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {filteredProducts.length >
      0 ? (
        <div className="product-grid product-grid--shop">
          {filteredProducts.map(
            (product) => (
              <ProductCard
                product={product}
                key={product.id}
              />
            )
          )}
        </div>
      ) : (
        <div className="shop-empty">
          <p>
            Aucun produit ne correspond
            à ces filtres.
          </p>

          <button
            type="button"
            onClick={resetFilters}
          >
            Réinitialiser les filtres
          </button>
        </div>
      )}
    </section>
  );
}