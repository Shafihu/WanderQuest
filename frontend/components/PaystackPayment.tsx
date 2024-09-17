import React from "react";
import { Paystack } from "react-native-paystack-webview";
import { View } from "react-native";
import Colors from "@/constants/Colors";
import { router } from "expo-router";

export const Pay = ({
  price,
  onSuccessfullTransaction,
  onCancelledTransaction,
}: {
  price: number;
  onSuccessfullTransaction: () => void;
  onCancelledTransaction: () => void;
}) => {
  return (
    <View style={{ flex: 1 }}>
      <Paystack
        paystackKey="pk_test_a57d1769b19a4b70ece393a467f631f9aa3db433"
        amount={price}
        billingName="Shafihu"
        billingEmail="shafihumustapha0101@gmail.com"
        currency="GHS"
        activityIndicatorColor={Colors.primaryColor}
        channels={["card", "ussd", "mobile_money"]}
        onCancel={(e) => {
          // console.log(e.status);
          onCancelledTransaction();
        }}
        onSuccess={(res) => {
          // console.log(res.status);
          onSuccessfullTransaction();
        }}
        autoStart={true}
      />
    </View>
  );
};
