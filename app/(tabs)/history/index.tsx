import MainLayout from "@/components/layouts/MainLayout";
import HistoryScreen from "@/components/screens/History";
import ScrollViewCustom from "@/components/ui/ScrollViewCustom";
import React from "react";

const HistoryTab = () => {
  return (
    <MainLayout>
      <ScrollViewCustom>
        <HistoryScreen />
      </ScrollViewCustom>
    </MainLayout>
  );
};

export default HistoryTab;
