import { ProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDown } from "lucide-react";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <div className="flex flex-col h-full w-full gap-4">
      <div className="relative flex h-full w-full items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          width={0}
          height={0}
          sizes="100vw"
          alt={product.name}
          className="h-[90px] max-h-[70%] w-auto max-w-[80%]"
          style={{ objectFit: "contain" }}
        />

        {product.discountPercentage > 0 && (
          <Badge className="absolute left-3 top-3 px-2 py-[2px]">
            <ArrowDown size={14} /> {product.discountPercentage}%
          </Badge>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {product.name}
        </p>
        <div className="flex items-center gap-2 ">
          {product.discountPercentage > 0 ? (
            <>
              <p className="truncate font-semibold lg:text-lg">
                R$ {product.totalPrice.toFixed(2)}
              </p>

              <p className="truncate text-xs line-through opacity-75 lg:text-sm">
                R$ {Number(product.basePrice).toFixed(2)}
              </p>
            </>
          ) : (
            <p className="truncate text-sm font-semibold">
              R$ {product.basePrice.toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
