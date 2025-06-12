import type { Product } from "@/data/type";

type EditMetaType = {
  heading: string;
  description: string;
  isSale?: boolean;
  discount: number;
};

interface AdviceCard {
  needEdit: boolean;
  EditMeta?: EditMetaType;
  className?: string;
  product: Product;
}

const AdviceCard: React.FC<AdviceCard> = ({ EditMeta, needEdit, product, className }) => {
  return (
    <div className={`flex flex-col w-full h-auto relative rounded  ${className ?? ""}`}>
      {/* Responsive Image */}
      <img
        src={product.images?.[0] ?? ""}
        alt={product.title}
        className="w-full h-64 sm:h-80 md:h-full object-contain"
      />

      {/* Conditional Edit Meta Display */}
      {needEdit && (
        <div className="flex flex-col p-4">
          <h2 className="text-center italic text-md">{EditMeta?.heading}</h2>
          <p className="text-gray italic text-md">{EditMeta?.description}</p>

          <span className="text-md font-thin capitalize absolute top-2 left-2">
            {EditMeta?.isSale ? (
              <p>
                Sales{" "}
                <i className="line-through text-sm text-white">{product.price}</i>{" "}
                {product.price - EditMeta.discount}
              </p>
            ) : (
              <i className="text-sm italic text-white">Best offer</i>
            )}
          </span>
        </div>
      )}
    </div>
  );
};

export default AdviceCard;
