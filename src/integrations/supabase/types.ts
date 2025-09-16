export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      analyses: {
        Row: {
          accuracy_score: number | null
          analysis_data: Json | null
          audio_file_path: string | null
          created_at: string | null
          feedback: string | null
          id: string
          midi_file_path: string | null
          session_id: string | null
          sheet_music_path: string | null
          status: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          accuracy_score?: number | null
          analysis_data?: Json | null
          audio_file_path?: string | null
          created_at?: string | null
          feedback?: string | null
          id?: string
          midi_file_path?: string | null
          session_id?: string | null
          sheet_music_path?: string | null
          status?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          accuracy_score?: number | null
          analysis_data?: Json | null
          audio_file_path?: string | null
          created_at?: string | null
          feedback?: string | null
          id?: string
          midi_file_path?: string | null
          session_id?: string | null
          sheet_music_path?: string | null
          status?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "analyses_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      practice_sessions: {
        Row: {
          accuracy: number | null
          audio_file_name: string | null
          audio_file_url: string | null
          correct_notes: number | null
          created_at: string | null
          date: string | null
          duration: number | null
          id: string
          missed_notes: string | null
          piece_title: string | null
          sheet_music_file_name: string | null
          sheet_music_url: string | null
          tempo_feedback: string | null
          timing_feedback: string | null
          total_notes: number | null
          user_id: string
        }
        Insert: {
          accuracy?: number | null
          audio_file_name?: string | null
          audio_file_url?: string | null
          correct_notes?: number | null
          created_at?: string | null
          date?: string | null
          duration?: number | null
          id?: string
          missed_notes?: string | null
          piece_title?: string | null
          sheet_music_file_name?: string | null
          sheet_music_url?: string | null
          tempo_feedback?: string | null
          timing_feedback?: string | null
          total_notes?: number | null
          user_id: string
        }
        Update: {
          accuracy?: number | null
          audio_file_name?: string | null
          audio_file_url?: string | null
          correct_notes?: number | null
          created_at?: string | null
          date?: string | null
          duration?: number | null
          id?: string
          missed_notes?: string | null
          piece_title?: string | null
          sheet_music_file_name?: string | null
          sheet_music_url?: string | null
          tempo_feedback?: string | null
          timing_feedback?: string | null
          total_notes?: number | null
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string | null
          email: string | null
          id: string
          instruments: Json | null
          name: string | null
          skill_level: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          id: string
          instruments?: Json | null
          name?: string | null
          skill_level?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          id?: string
          instruments?: Json | null
          name?: string | null
          skill_level?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      sessions: {
        Row: {
          accuracy: number
          all_audio_notes: string[] | null
          all_sheet_notes: string[] | null
          analysis_method: string | null
          audio_file_name: string | null
          audio_url: string | null
          correct_notes: number
          created_at: string | null
          date: string | null
          duration: number | null
          extra_notes: string[] | null
          id: string
          missed_notes: string[]
          overall_feedback: string | null
          piece_title: string | null
          sheet_music_file_name: string | null
          sheet_music_url: string | null
          tempo_feedback: string | null
          timing_feedback: string | null
          tips: string[] | null
          total_notes: number
          total_user_notes: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          accuracy: number
          all_audio_notes?: string[] | null
          all_sheet_notes?: string[] | null
          analysis_method?: string | null
          audio_file_name?: string | null
          audio_url?: string | null
          correct_notes: number
          created_at?: string | null
          date?: string | null
          duration?: number | null
          extra_notes?: string[] | null
          id?: string
          missed_notes?: string[]
          overall_feedback?: string | null
          piece_title?: string | null
          sheet_music_file_name?: string | null
          sheet_music_url?: string | null
          tempo_feedback?: string | null
          timing_feedback?: string | null
          tips?: string[] | null
          total_notes: number
          total_user_notes?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          accuracy?: number
          all_audio_notes?: string[] | null
          all_sheet_notes?: string[] | null
          analysis_method?: string | null
          audio_file_name?: string | null
          audio_url?: string | null
          correct_notes?: number
          created_at?: string | null
          date?: string | null
          duration?: number | null
          extra_notes?: string[] | null
          id?: string
          missed_notes?: string[]
          overall_feedback?: string | null
          piece_title?: string | null
          sheet_music_file_name?: string | null
          sheet_music_url?: string | null
          tempo_feedback?: string | null
          timing_feedback?: string | null
          tips?: string[] | null
          total_notes?: number
          total_user_notes?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      user_sessions: {
        Row: {
          accuracy: number | null
          allAudioNotes: string[] | null
          allSheetNotes: string[] | null
          analysisMethod: string | null
          audioFileName: string | null
          audioUrl: string | null
          correctNotes: number | null
          created_at: string | null
          date: string | null
          duration: number | null
          extraNotes: string[] | null
          id: string | null
          missedNotes: string[] | null
          overallFeedback: string | null
          pieceTitle: string | null
          sheetMusicFileName: string | null
          sheetMusicUrl: string | null
          tempoFeedback: string | null
          timingFeedback: string | null
          tips: string[] | null
          totalNotes: number | null
          totalUserNotes: number | null
          updated_at: string | null
          userId: string | null
        }
        Insert: {
          accuracy?: number | null
          allAudioNotes?: string[] | null
          allSheetNotes?: string[] | null
          analysisMethod?: string | null
          audioFileName?: string | null
          audioUrl?: string | null
          correctNotes?: number | null
          created_at?: string | null
          date?: never
          duration?: number | null
          extraNotes?: string[] | null
          id?: never
          missedNotes?: string[] | null
          overallFeedback?: string | null
          pieceTitle?: string | null
          sheetMusicFileName?: string | null
          sheetMusicUrl?: string | null
          tempoFeedback?: string | null
          timingFeedback?: string | null
          tips?: string[] | null
          totalNotes?: number | null
          totalUserNotes?: number | null
          updated_at?: string | null
          userId?: never
        }
        Update: {
          accuracy?: number | null
          allAudioNotes?: string[] | null
          allSheetNotes?: string[] | null
          analysisMethod?: string | null
          audioFileName?: string | null
          audioUrl?: string | null
          correctNotes?: number | null
          created_at?: string | null
          date?: never
          duration?: number | null
          extraNotes?: string[] | null
          id?: never
          missedNotes?: string[] | null
          overallFeedback?: string | null
          pieceTitle?: string | null
          sheetMusicFileName?: string | null
          sheetMusicUrl?: string | null
          tempoFeedback?: string | null
          timingFeedback?: string | null
          tips?: string[] | null
          totalNotes?: number | null
          totalUserNotes?: number | null
          updated_at?: string | null
          userId?: never
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
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
