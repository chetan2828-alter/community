import React from 'react';
import { View, Text, ActivityIndicator, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { 
  colors, spacing, borderRadius, typography, iconSize, 
  shadows, wp, hp 
} from '../../utils/responsiveHelper';
import styles from './ValidationStyles';

const Validation = ({ loading, success, visible = true }) => {
  if (!visible || (!loading && !success)) return null;

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.container}>
          {loading ? (
            <View style={styles.content}>
              <ActivityIndicator size="large" color={colors.primary} />
              <Text style={styles.title}>Processing...</Text>
              <Text style={styles.subtitle}>Please wait while we save your information</Text>
            </View>
          ) : success ? (
            <View style={styles.content}>
              <View style={styles.successIcon}>
                <Ionicons name="checkmark" size={iconSize.xl} color={colors.white} />
              </View>
              <Text style={styles.title}>Success!</Text>
              <Text style={styles.subtitle}>Your information has been saved successfully</Text>
            </View>
          ) : null}
        </View>
      </View>
    </Modal>
  );
};

export default Validation;