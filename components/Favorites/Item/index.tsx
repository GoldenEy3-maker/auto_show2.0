import { ProductItem } from "@/components/Product"
import { UserFavoriteProduct } from "@/typescript/types"

interface FavoritesItemProps extends UserFavoriteProduct {}

export default function FavoriteItem({ product, _date }: UserFavoriteProduct) {
  return <ProductItem {...product} />
}
