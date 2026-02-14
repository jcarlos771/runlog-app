import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const Colors = {
  primary: '#EF4444', // Coral
  secondary: '#1E293B', // Slate
  background: '#1a1a1a',
  cardBackground: '#2a2a2a',
  textPrimary: '#ffffff',
  textSecondary: '#9CA3AF',
};

const { width } = Dimensions.get('window');

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.appIcon}>
              <Ionicons name="person" size={20} color={Colors.primary} />
            </View>
            <Text style={styles.appName}>RunLog</Text>
          </View>
          <TouchableOpacity style={styles.calendarButton}>
            <Ionicons name="calendar" size={24} color={Colors.textSecondary} />
          </TouchableOpacity>
        </View>

        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <View style={styles.statsCard}>
            <View style={styles.statIcon}>
              <Ionicons name="trending-up" size={16} color={Colors.primary} />
            </View>
            <Text style={styles.statLabel}>THIS MONTH</Text>
            <Text style={styles.statValue}>145<Text style={styles.statUnit}>km</Text></Text>
          </View>
          
          <View style={styles.statsCard}>
            <View style={styles.statIcon}>
              <Ionicons name="time" size={16} color={Colors.primary} />
            </View>
            <Text style={styles.statLabel}>BEST PACE</Text>
            <Text style={styles.statValue}>4:12<Text style={styles.statUnit}>/km</Text></Text>
          </View>
          
          <View style={styles.statsCard}>
            <View style={styles.statIcon}>
              <Ionicons name="checkmark-circle" size={16} color={Colors.primary} />
            </View>
            <Text style={styles.statLabel}>TOTAL RUNS</Text>
            <Text style={styles.statValue}>87</Text>
          </View>
        </View>

        {/* Recent Activity Header */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllButton}>View all</Text>
          </TouchableOpacity>
        </View>

        {/* Activity Cards */}
        <View style={styles.activityCard}>
          <View style={styles.activityHeader}>
            <Text style={styles.activityTitle}>Sunday Morning 10k</Text>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={16} color="#F59E0B" />
              <Text style={styles.ratingText}>4.0</Text>
            </View>
          </View>
          <Text style={styles.activityDate}>Oct 12 • 8:30 AM</Text>
          
          <View style={styles.activityMetrics}>
            <View style={styles.metricColumn}>
              <Text style={styles.metricLabel}>DIST</Text>
              <Text style={styles.metricValue}>10.0<Text style={styles.metricUnit}>km</Text></Text>
            </View>
            <View style={styles.metricColumn}>
              <Text style={styles.metricLabel}>TIME</Text>
              <Text style={styles.metricValue}>52:30</Text>
            </View>
            <View style={styles.metricColumn}>
              <Text style={styles.metricLabel}>PACE</Text>
              <Text style={styles.metricValue}>5:15</Text>
            </View>
          </View>
        </View>

        <View style={styles.activityCard}>
          <View style={styles.activityHeader}>
            <Text style={styles.activityTitle}>Recovery Run</Text>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={16} color="#F59E0B" />
              <Text style={styles.ratingText}>3.0</Text>
            </View>
          </View>
          <Text style={styles.activityDate}>Oct 05</Text>
          
          <View style={styles.recoveryMetrics}>
            <Text style={styles.recoveryDistance}>5.0 <Text style={styles.recoveryUnit}>km</Text></Text>
            <Text style={styles.recoveryTime}>28:10</Text>
            <Text style={styles.recoveryPace}>5:38 <Text style={styles.recoveryPaceUnit}>/km</Text></Text>
          </View>
        </View>
      </ScrollView>

      {/* Add Run Button */}
      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add" size={24} color={Colors.textPrimary} />
        <Text style={styles.addButtonText}>Añadir Carrera</Text>
      </TouchableOpacity>

      <StatusBar style="light" backgroundColor={Colors.background} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.textPrimary,
  },
  calendarButton: {
    padding: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 32,
    gap: 12,
  },
  statsCard: {
    flex: 1,
    backgroundColor: Colors.cardBackground,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  statIcon: {
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 10,
    fontWeight: '500',
    color: Colors.textSecondary,
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.textPrimary,
  },
  statUnit: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  viewAllButton: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: '500',
  },
  activityCard: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
  },
  activityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginLeft: 4,
  },
  activityDate: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginBottom: 16,
  },
  activityMetrics: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metricColumn: {
    alignItems: 'center',
  },
  metricLabel: {
    fontSize: 10,
    color: Colors.textSecondary,
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  metricValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.textPrimary,
  },
  metricUnit: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  recoveryMetrics: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recoveryDistance: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  recoveryUnit: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  recoveryTime: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  recoveryPace: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  recoveryPaceUnit: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  addButton: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginHorizontal: 16,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginLeft: 8,
  },
});
