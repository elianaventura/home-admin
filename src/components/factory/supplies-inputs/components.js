import Consuption from "@/components/supplies-item/inputs/consumption/consuption";
import PriceByUnit from "@/components/supplies-item/inputs/price_by_unit/price_by_unit";
import Priority from "@/components/supplies-item/inputs/priority/priority";
import ShoppingPlaces from "@/components/supplies-item/inputs/shopping_places";
import Stock from "@/components/supplies-item/inputs/stock/stock";
import Unit from "@/components/supplies-item/inputs/unit/unit";
import PriceByPlace from "@/components/supplies-item/inputs/price_by_place/item-price-by-place";

const sources = {
  'consumption_by_time': Consuption,
  'price_per_unit': PriceByUnit,
  'priority': Priority,
  'shopping_places': ShoppingPlaces,
  'stock': Stock,
  'unit': Unit,
  'item_price_by_place': PriceByPlace,
};

export default sources;
