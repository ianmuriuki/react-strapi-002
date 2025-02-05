import type { Schema, Struct } from '@strapi/strapi';

export interface UserPreferencesPreferences extends Struct.ComponentSchema {
  collectionName: 'components_user_preferences_preferences';
  info: {
    displayName: 'preferences';
    icon: 'sun';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'user-preferences.preferences': UserPreferencesPreferences;
    }
  }
}
