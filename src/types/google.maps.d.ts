declare namespace google.maps {
  namespace places {
    interface AutocompletePrediction {
      placeId: string;
      description?: string;
      structured_formatting?: {
        main_text?: string;
        secondary_text?: string;
      };
    }
  }
}
