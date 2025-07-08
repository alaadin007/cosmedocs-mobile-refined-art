export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      chatbot_knowledge: {
        Row: {
          content: string
          created_at: string
          id: string
          source_type: string
          title: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          source_type: string
          title: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          source_type?: string
          title?: string
        }
        Relationships: []
      }
      contact_us: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
          phone: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          phone?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          phone?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      cosmetic_content: {
        Row: {
          content: string | null
          created_at: string
          id: string
          image_alt: string | null
          image_url: string | null
          seo_description: string | null
          title: string | null
          url: string
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: string
          image_alt?: string | null
          image_url?: string | null
          seo_description?: string | null
          title?: string | null
          url: string
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          image_alt?: string | null
          image_url?: string | null
          seo_description?: string | null
          title?: string | null
          url?: string
        }
        Relationships: []
      }
      facial_assessments: {
        Row: {
          assessment_date: string | null
          created_at: string | null
          dynamic_lines: Json | null
          facial_volume: Json | null
          id: string
          image_path: string | null
          sagging_skin: Json | null
          skin_surface: Json | null
          static_lines: Json | null
          total_score: number | null
        }
        Insert: {
          assessment_date?: string | null
          created_at?: string | null
          dynamic_lines?: Json | null
          facial_volume?: Json | null
          id?: string
          image_path?: string | null
          sagging_skin?: Json | null
          skin_surface?: Json | null
          static_lines?: Json | null
          total_score?: number | null
        }
        Update: {
          assessment_date?: string | null
          created_at?: string | null
          dynamic_lines?: Json | null
          facial_volume?: Json | null
          id?: string
          image_path?: string | null
          sagging_skin?: Json | null
          skin_surface?: Json | null
          static_lines?: Json | null
          total_score?: number | null
        }
        Relationships: []
      }
      header_knowledge: {
        Row: {
          category: string
          content: string
          created_at: string
          id: string
          title: string
        }
        Insert: {
          category: string
          content: string
          created_at?: string
          id?: string
          title: string
        }
        Update: {
          category?: string
          content?: string
          created_at?: string
          id?: string
          title?: string
        }
        Relationships: []
      }
      pricing_content: {
        Row: {
          area: string | null
          created_at: string
          id: string
          page_title: string | null
          price: string | null
          treatment_name: string
          url: string
        }
        Insert: {
          area?: string | null
          created_at?: string
          id?: string
          page_title?: string | null
          price?: string | null
          treatment_name: string
          url: string
        }
        Update: {
          area?: string | null
          created_at?: string
          id?: string
          page_title?: string | null
          price?: string | null
          treatment_name?: string
          url?: string
        }
        Relationships: []
      }
      product_analyses: {
        Row: {
          active_ingredients: Json | null
          benefits: string[] | null
          category: string | null
          category_ratings: Json | null
          created_at: string | null
          description: string | null
          id: string
          ingredients: string[] | null
          issues: string[] | null
          last_scraped: string | null
          last_updated: string | null
          ph_level: number | null
          price: string | null
          product_name: string | null
          product_url: string
          rating: number | null
          raw_content: string | null
          skin_types: string[] | null
          sustainability_info: Json | null
          target_cells: string[] | null
          total_ingredients: number | null
          unnecessary_ingredients: number | null
        }
        Insert: {
          active_ingredients?: Json | null
          benefits?: string[] | null
          category?: string | null
          category_ratings?: Json | null
          created_at?: string | null
          description?: string | null
          id?: string
          ingredients?: string[] | null
          issues?: string[] | null
          last_scraped?: string | null
          last_updated?: string | null
          ph_level?: number | null
          price?: string | null
          product_name?: string | null
          product_url?: string
          rating?: number | null
          raw_content?: string | null
          skin_types?: string[] | null
          sustainability_info?: Json | null
          target_cells?: string[] | null
          total_ingredients?: number | null
          unnecessary_ingredients?: number | null
        }
        Update: {
          active_ingredients?: Json | null
          benefits?: string[] | null
          category?: string | null
          category_ratings?: Json | null
          created_at?: string | null
          description?: string | null
          id?: string
          ingredients?: string[] | null
          issues?: string[] | null
          last_scraped?: string | null
          last_updated?: string | null
          ph_level?: number | null
          price?: string | null
          product_name?: string | null
          product_url?: string
          rating?: number | null
          raw_content?: string | null
          skin_types?: string[] | null
          sustainability_info?: Json | null
          target_cells?: string[] | null
          total_ingredients?: number | null
          unnecessary_ingredients?: number | null
        }
        Relationships: []
      }
      products: {
        Row: {
          benefits: string[] | null
          category: string | null
          created_at: string
          description: string
          id: string
          image_url: string
          key_ingredient: string | null
          name: string
          price: number
          rating: number | null
          url: string
        }
        Insert: {
          benefits?: string[] | null
          category?: string | null
          created_at?: string
          description: string
          id?: string
          image_url: string
          key_ingredient?: string | null
          name: string
          price: number
          rating?: number | null
          url: string
        }
        Update: {
          benefits?: string[] | null
          category?: string | null
          created_at?: string
          description?: string
          id?: string
          image_url?: string
          key_ingredient?: string | null
          name?: string
          price?: number
          rating?: number | null
          url?: string
        }
        Relationships: []
      }
      raffle_entries: {
        Row: {
          claimed: boolean | null
          created_at: string
          email: string
          id: string
          prize: string
        }
        Insert: {
          claimed?: boolean | null
          created_at?: string
          email: string
          id?: string
          prize: string
        }
        Update: {
          claimed?: boolean | null
          created_at?: string
          email?: string
          id?: string
          prize?: string
        }
        Relationships: []
      }
      search_bar_ai_configs: {
        Row: {
          created_at: string
          id: string
          max_tokens: number | null
          name: string
          system_prompt: string
          temperature: number | null
        }
        Insert: {
          created_at?: string
          id?: string
          max_tokens?: number | null
          name: string
          system_prompt: string
          temperature?: number | null
        }
        Update: {
          created_at?: string
          id?: string
          max_tokens?: number | null
          name?: string
          system_prompt?: string
          temperature?: number | null
        }
        Relationships: []
      }
      search_bar_configurations: {
        Row: {
          created_at: string
          domain: string
          features: string[] | null
          id: string
          name: string
          prompt_template: string | null
          website_id: string | null
        }
        Insert: {
          created_at?: string
          domain: string
          features?: string[] | null
          id?: string
          name: string
          prompt_template?: string | null
          website_id?: string | null
        }
        Update: {
          created_at?: string
          domain?: string
          features?: string[] | null
          id?: string
          name?: string
          prompt_template?: string | null
          website_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "search_bar_configurations_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "search_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      search_configurations: {
        Row: {
          created_at: string
          id: string
          max_tokens: number | null
          system_prompt: string
          temperature: number | null
        }
        Insert: {
          created_at?: string
          id?: string
          max_tokens?: number | null
          system_prompt?: string
          temperature?: number | null
        }
        Update: {
          created_at?: string
          id?: string
          max_tokens?: number | null
          system_prompt?: string
          temperature?: number | null
        }
        Relationships: []
      }
      search_history: {
        Row: {
          created_at: string
          id: string
          metadata: Json | null
          query: string
          response: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          metadata?: Json | null
          query: string
          response?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          metadata?: Json | null
          query?: string
          response?: string | null
        }
        Relationships: []
      }
      search_prompts: {
        Row: {
          created_at: string
          document_path: string | null
          document_type: string | null
          id: string
          prompt_text: string
          website_id: string | null
        }
        Insert: {
          created_at?: string
          document_path?: string | null
          document_type?: string | null
          id?: string
          prompt_text: string
          website_id?: string | null
        }
        Update: {
          created_at?: string
          document_path?: string | null
          document_type?: string | null
          id?: string
          prompt_text?: string
          website_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "search_prompts_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "search_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      search_queries: {
        Row: {
          created_at: string | null
          domain: string
          fts: unknown | null
          id: string
          normalized_query: string
          original_query: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          domain: string
          fts?: unknown | null
          id?: string
          normalized_query: string
          original_query: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          domain?: string
          fts?: unknown | null
          id?: string
          normalized_query?: string
          original_query?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      search_queries_responses: {
        Row: {
          created_at: string
          id: string
          query: string
          response: string
        }
        Insert: {
          created_at?: string
          id?: string
          query: string
          response: string
        }
        Update: {
          created_at?: string
          id?: string
          query?: string
          response?: string
        }
        Relationships: []
      }
      search_websites: {
        Row: {
          created_at: string
          domain: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          domain: string
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          domain?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      secrets: {
        Row: {
          created_at: string
          id: string
          name: string
          value: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          value: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          value?: string
        }
        Relationships: []
      }
      serp_results: {
        Row: {
          created_at: string | null
          expires_at: string
          id: string
          query_id: string | null
          raw_results: Json
        }
        Insert: {
          created_at?: string | null
          expires_at: string
          id?: string
          query_id?: string | null
          raw_results: Json
        }
        Update: {
          created_at?: string | null
          expires_at?: string
          id?: string
          query_id?: string | null
          raw_results?: Json
        }
        Relationships: [
          {
            foreignKeyName: "serp_results_query_id_fkey"
            columns: ["query_id"]
            isOneToOne: false
            referencedRelation: "search_queries"
            referencedColumns: ["id"]
          },
        ]
      }
      treatment_images: {
        Row: {
          created_at: string
          description: string | null
          file_size: number | null
          id: string
          image_type: string
          image_url: string
          title: string
          treatment_name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          file_size?: number | null
          id?: string
          image_type: string
          image_url: string
          title: string
          treatment_name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          file_size?: number | null
          id?: string
          image_type?: string
          image_url?: string
          title?: string
          treatment_name?: string
          updated_at?: string
        }
        Relationships: []
      }
      treatment_videos: {
        Row: {
          created_at: string
          description: string | null
          duration: number | null
          file_size: number | null
          id: string
          thumbnail_url: string | null
          title: string
          treatment_name: string
          updated_at: string
          video_url: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          duration?: number | null
          file_size?: number | null
          id?: string
          thumbnail_url?: string | null
          title: string
          treatment_name: string
          updated_at?: string
          video_url: string
        }
        Update: {
          created_at?: string
          description?: string | null
          duration?: number | null
          file_size?: number | null
          id?: string
          thumbnail_url?: string | null
          title?: string
          treatment_name?: string
          updated_at?: string
          video_url?: string
        }
        Relationships: []
      }
      website_content: {
        Row: {
          content: string | null
          created_at: string | null
          fts: unknown | null
          id: string
          images: string[] | null
          last_scraped: string | null
          raw_html: string | null
          seo_description: string | null
          title: string | null
          url: string
          website_source: string
        }
        Insert: {
          content?: string | null
          created_at?: string | null
          fts?: unknown | null
          id?: string
          images?: string[] | null
          last_scraped?: string | null
          raw_html?: string | null
          seo_description?: string | null
          title?: string | null
          url: string
          website_source: string
        }
        Update: {
          content?: string | null
          created_at?: string | null
          fts?: unknown | null
          id?: string
          images?: string[] | null
          last_scraped?: string | null
          raw_html?: string | null
          seo_description?: string | null
          title?: string | null
          url?: string
          website_source?: string
        }
        Relationships: []
      }
      website_pages: {
        Row: {
          body_content: string | null
          created_at: string | null
          h1_tags: string[] | null
          id: string
          images: Json[] | null
          last_scraped: string | null
          meta_description: string | null
          meta_keywords: string | null
          raw_html: string | null
          title: string | null
          url: string
        }
        Insert: {
          body_content?: string | null
          created_at?: string | null
          h1_tags?: string[] | null
          id?: string
          images?: Json[] | null
          last_scraped?: string | null
          meta_description?: string | null
          meta_keywords?: string | null
          raw_html?: string | null
          title?: string | null
          url: string
        }
        Update: {
          body_content?: string | null
          created_at?: string | null
          h1_tags?: string[] | null
          id?: string
          images?: Json[] | null
          last_scraped?: string | null
          meta_description?: string | null
          meta_keywords?: string | null
          raw_html?: string | null
          title?: string | null
          url?: string
        }
        Relationships: []
      }
      website_reviews: {
        Row: {
          created_at: string | null
          id: string
          last_scraped: string | null
          rating: number | null
          review_date: string | null
          review_text: string
          reviewer_name: string | null
          treatment_name: string | null
          url: string
          verified_purchase: boolean | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          last_scraped?: string | null
          rating?: number | null
          review_date?: string | null
          review_text: string
          reviewer_name?: string | null
          treatment_name?: string | null
          url: string
          verified_purchase?: boolean | null
        }
        Update: {
          created_at?: string | null
          id?: string
          last_scraped?: string | null
          rating?: number | null
          review_date?: string | null
          review_text?: string
          reviewer_name?: string | null
          treatment_name?: string | null
          url?: string
          verified_purchase?: boolean | null
        }
        Relationships: []
      }
      website_scrape_schedules: {
        Row: {
          created_at: string
          id: string
          is_active: boolean | null
          last_scraped_at: string | null
          next_scrape_at: string | null
          scrape_frequency: string | null
          website_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          is_active?: boolean | null
          last_scraped_at?: string | null
          next_scrape_at?: string | null
          scrape_frequency?: string | null
          website_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          is_active?: boolean | null
          last_scraped_at?: string | null
          next_scrape_at?: string | null
          scrape_frequency?: string | null
          website_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "website_scrape_schedules_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "search_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      website_search_content: {
        Row: {
          content: string | null
          created_at: string | null
          id: string
          title: string | null
          url: string
          website_id: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string | null
          id?: string
          title?: string | null
          url: string
          website_id?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string | null
          id?: string
          title?: string | null
          url?: string
          website_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "website_search_content_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "search_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      website_vectors: {
        Row: {
          content: string | null
          created_at: string
          id: string
          title: string | null
          url: string
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: string
          title?: string | null
          url: string
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          title?: string | null
          url?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      cleanup_expired_results: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      delete_all_website_content: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      get_ai_system_prompt: {
        Args: { query: string }
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
