import { BsCartPlus } from "react-icons/bs";
import useCartStore from "../store/cartStore";
import { getTranslation } from "../i18n";

const ProductsList = ({ products, lang = "es" }) => {
  const { addToCart } = useCartStore();
  const t = getTranslation(lang);

  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {products.map((product) => (
          <div className="col" key={product.id}>
            <div className="card custom-card h-100">
              <div className="position-relative">
                <img
                  src={`/imgs-api/${product.id}.webp`}
                  className="card-img-top"
                  alt={product.title}
                />
                {product.isFreeShipping && (
                  <span className="badge custom-badge position-absolute top-0 end-0">
                    {t.product.freeShipping}
                  </span>
                )}
              </div>

              <div className="card-body d-flex flex-column">
                <h5 className="card-title mb-4">{product.title}</h5>

                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <p className="mb-0">
                    <strong>{t.product.priceLabel}:</strong>{" "}
                    {product.currencyFormat}
                    {product.price}
                  </p>
                  <p className="mb-0">
                    <strong>{t.product.installmentsLabel}:</strong>{" "}
                    {product.installments} {t.product.installmentsUnit}
                  </p>
                </div>

                <p className="mb-1">
                  <strong>{t.product.sizeLabel}:</strong>
                </p>
                <div className="d-flex gap-2 mb-3">
                  {product.availableSizes.map((size, index) => (
                    <span
                      key={index}
                      className="border border-dark rounded-circle text-center d-inline-flex justify-content-center align-items-center tallas"
                    >
                      {size}
                    </span>
                  ))}
                </div>

                <button
                  className="btn btn-cart w-100 mt-auto"
                  onClick={() => addToCart(product)}
                >
                  {t.product.addToCart} &nbsp; <BsCartPlus />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;