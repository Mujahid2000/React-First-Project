import PriceOption from "../PriceOptions/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "features": [
            "Access to cardio and strength training equipment",
            "Open gym hours",
            "Locker room access",
            "Discounts on gym merchandise",
            "Monthly fitness assessments"
          ],
          "price": 29.99
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "features": [
            "All features of Basic Membership",
            "Unlimited group fitness classes",
            "Access to sauna and spa facilities",
            "Personal trainer consultation",
            "Nutrition counseling",
            "Towel service"
          ],
          "price": 49.99
        },
        {
          "id": 3,
          "name": "Family Membership",
          "features": [
            "All features of Premium Membership for two adults and up to three children",
            "Childcare services during workouts",
            "Discounts on additional personal training sessions",
            "Access to swimming pool",
            "Free parking for one vehicle"
          ],
          "price": 99.99
        }
      ];
      
    
    return (
        <div className="m-12">
            <h2 className="text-5xl mb-5">Best Prices in the </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}> </PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;