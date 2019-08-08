import {
  ACTIVITY_TYPE_PURCHASE,
  ACTIVITY_TYPE_MEAL,
  ACTIVITY_TYPE_TRANSPORTATION,
  PURCHASE_CATEGORY_FOOD_RESTAURANT,
  PURCHASE_CATEGORY_TRANSPORTATION_TAXI,
  PURCHASE_CATEGORY_TRANSPORTATION_RAILROAD,
  PURCHASE_CATEGORY_TRANSPORTATION_AIRLINES,
} from '../../definitions';

export function getActivityTypeForCategory(category) {
  switch (category) {
    case PURCHASE_CATEGORY_FOOD_RESTAURANT:
      return ACTIVITY_TYPE_MEAL;
    case PURCHASE_CATEGORY_TRANSPORTATION_TAXI:
    case PURCHASE_CATEGORY_TRANSPORTATION_RAILROAD:
    case PURCHASE_CATEGORY_TRANSPORTATION_AIRLINES:
      return ACTIVITY_TYPE_TRANSPORTATION;
    default:
      return ACTIVITY_TYPE_PURCHASE;
  }
}
