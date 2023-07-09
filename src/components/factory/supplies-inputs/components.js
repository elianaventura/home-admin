import Consuption from "@/components/supplies-item/inputs/consuption";
import PriceByUnit from "@/components/supplies-item/inputs/price_by_unit";
import Priority from "@/components/supplies-item/inputs/priority";
import ShoppingPlaces from "@/components/supplies-item/inputs/shopping_places";
import Stock from "@/components/supplies-item/inputs/stock";

const sources = {
  'consumption_by_time': Consuption,
  'price_per_unit': PriceByUnit,
  'priority': Priority,
  'shopping_places': ShoppingPlaces,
  'stock': Stock,
};

export default sources;
