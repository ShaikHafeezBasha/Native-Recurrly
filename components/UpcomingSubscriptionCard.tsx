import "@/global.css";
import { formatCurrency } from "@/lib/utils";
import { Image, Text, View } from "react-native";

type Props = {
  data: UpcomingSubscription;
};

const UpcomingSubscriptionCard = ({
  data: { name, price, daysLeft, icon, currency },
}: Props) => {
  return (
    <View className="upcoming-card">
      <View className="upcoming-row">
        <Image source={icon} className="upcoming-icon" />
        <View>
          <Text className="upcoming-price">
            {formatCurrency(price, currency)}
          </Text>
          <Text className="upcoming-meta" numberOfLines={1}>
            {daysLeft > 1 ? `${daysLeft} days left` : `last day`}
          </Text>
        </View>
      </View>

      <Text className="upcoming-name" numberOfLines={1}>
        {name}
      </Text>
    </View>
  );
};

export default UpcomingSubscriptionCard;
