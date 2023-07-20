import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { checkImageURL } from "../../../../utils";
import styles from "./popularjobcard.style";
import { jobType } from "../../../../types";
interface PopularJobCardProps {
  job: jobType;
  selectedJobs: string;
  handleCardPress: (job: any) => void;
}
const PopularJobCard: React.FC<PopularJobCardProps> = ({
  job,
  selectedJobs,
  handleCardPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJobs, job)}
      onPress={() => {
        handleCardPress(job);
      }}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJobs, job)}>
        <Image
          source={{
            uri:
              job.employer_logo ||
              "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {job.employer_name}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJobs, job)} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.location}>{job.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
