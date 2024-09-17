import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Pay } from "@/components/PaystackPayment";
import { useState } from "react";
import { router } from "expo-router";

type PaymentRouteParams = {
  price: number;
};

const Payment = () => {
  const route = useRoute<RouteProp<{ params: PaymentRouteParams }, "params">>();
  const { price } = route.params;
  const [successfulPayment, setSuccessPayment] = useState(false);

  const onSuccessfullTransaction = () => {
    console.log("Transaction successful");
    setSuccessPayment(true);
  };

  const onCancelledTransaction = () => {
    console.log("Transaction cancelled");
    setSuccessPayment(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        {successfulPayment ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text>Payment was successful</Text>
            <TouchableOpacity>
              <TouchableOpacity
                onPress={() => router.back()}
                style={{ marginTop: 10 }}
              >
                <Text>Back to listings</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        ) : (
          <Pay
            price={price}
            onSuccessfullTransaction={onSuccessfullTransaction}
            onCancelledTransaction={onCancelledTransaction}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
