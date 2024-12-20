import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import FooterMenu from "../components/Menus/FooterMenu";
import axios from "axios";
import ProjectCard from "../components/ProjectCard";
import ProjectCardPayment from "../components/ProjectCardPayment";

const ViewInprogressGigsClient = () => {
  // State
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  // Get user projects
  const getUserProjects = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/project/inprogress-project");
      setLoading(false);
      setProjects(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("Error fetching projects");
    }
  };

  // Initial load
  useEffect(() => {
    getUserProjects();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <ProjectCardPayment projects={projects} />
        {/* <ProjectCard projects={projects} myProjectScreen={true} /> */}
        {/* Use ProjectCard to display project data */}
        {/* <Text>{JSON.stringify(projects, null, 4)}</Text> */}
      </ScrollView>
      <View>
        <FooterMenu />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    margin: 10,
  },
});

export default ViewInprogressGigsClient;
