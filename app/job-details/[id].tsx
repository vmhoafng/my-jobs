import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { useRouter, Stack, useSearchParams } from "expo-router";
import React, { useCallback, useState } from "react";
import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";
import { COLORS, SIZES, icons } from "../../constants";
import useFetch from "../../hooks/useFetch";
import styles from "../../styles/search";
const tabs = ["about", "qualifications", "responsibilities"];

const JobDetailds = () => {
  const param = useSearchParams();
  const router = useRouter();
  const { data, isLoading, error, refetch } = useFetch("job-details", {
    job_id: param.id,
  });
  const [refeshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);
  const displayTabContent = () => {
    switch (activeTab) {
      case "about":
        return <JobAbout info={data[0].job_description ?? "No data"} />;
      case "qualifications":
        return (
          <Specifics
            title="Qualifications"
            points={data[0].job_highlights?.Qualifications ?? ["N/A"]}
          />
        );
      case "responsibilities":
        return (
          <Specifics
            title="Responsibilities"
            points={data[0].job_highlights?.Responsibilities ?? ["N/A"]}
          />
        );
      default:
        break;
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            ></ScreenHeaderBtn>
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={icons.share}
              dimension="60%"
            ></ScreenHeaderBtn>
          ),
          headerTitle: "",
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refeshing} onRefresh={onRefresh} />
        }
      >
        {isLoading ? (
          <ActivityIndicator size={"large"} color={COLORS.primary} />
        ) : error && false ? (
          <Text>Something went wrong...</Text>
        ) : data.length === 0 ? (
          <Text>No data</Text>
        ) : (
          <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
            <Company
              companyLogo={data[0].employer_logo}
              companyName={data[0].employer_name}
              jobTitle={data[0].job_title}
              location={data[0].job_country}
            />
            <JobTabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            {displayTabContent()}
          </View>
        )}
      </ScrollView>
      <JobFooter
        url={
          data[0].job_apply_link ?? "https://careers.google.com/jobs/results"
        }
      />
    </SafeAreaView>
  );
};

export default JobDetailds;
