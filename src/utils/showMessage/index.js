import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { showMessage } from 'react-native-flash-message';
import { colors } from '../colors';

export function showError(message) {
  showMessage({
    message: message,
    type: 'default',
    backgroundColor: colors.warning,
    color: colors.White,
  });
}

export function showSuccess(message) {
  showMessage({
    message: message,
    type: 'default',
    backgroundColor: colors.primary,
    color: colors.White,
  });
}
