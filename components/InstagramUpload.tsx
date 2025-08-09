"use client";

import React, { useState } from "react";
import { Upload, Image, Hash, Send, X } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";

interface InstagramUploadProps {
  onUpload?: (post: any) => void;
  onClose?: () => void;
}

export const InstagramUpload: React.FC<InstagramUploadProps> = ({ onUpload, onClose }) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [caption, setCaption] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file);
    }
  };

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleUpload = async () => {
    if (!selectedImage || !caption.trim()) return;

    setIsUploading(true);
    
    try {
      // Aquí iría la lógica real de subida
      const newPost = {
        id: `original-${Date.now()}`,
        image: URL.createObjectURL(selectedImage),
        caption: caption.trim(),
        likes: 0,
        timeAgo: "Ahora",
        isOriginal: true,
        tags
      };

      onUpload?.(newPost);
      
      // Reset form
      setSelectedImage(null);
      setCaption("");
      setTags([]);
      onClose?.();
    } catch (error) {
      console.error('Error uploading post:', error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
    >
      <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg">Subir contenido original</CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {/* Image Upload */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Imagen</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[var(--cobalt-blue)] transition-colors">
              {selectedImage ? (
                <div className="space-y-2">
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="Preview"
                    className="w-full h-32 object-cover rounded-lg mx-auto"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedImage(null)}
                  >
                    <X className="h-4 w-4 mr-2" />
                    Cambiar imagen
                  </Button>
                </div>
              ) : (
                <div className="space-y-2">
                  <Upload className="h-8 w-8 mx-auto text-gray-400" />
                  <p className="text-sm text-gray-500">
                    Haz clic para seleccionar una imagen
                  </p>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleImageSelect}
                    className="hidden"
                    id="image-upload"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => document.getElementById('image-upload')?.click()}
                  >
                    <Image className="h-4 w-4 mr-2" />
                    Seleccionar imagen
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Caption */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Descripción</label>
            <Textarea
              placeholder="Escribe una descripción atractiva para tu post..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              rows={3}
              maxLength={2200}
            />
            <p className="text-xs text-gray-500 text-right">
              {caption.length}/2200
            </p>
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Etiquetas</label>
            <div className="flex gap-2">
              <Input
                placeholder="Añadir etiqueta..."
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleAddTag}
              >
                <Hash className="h-4 w-4" />
              </Button>
            </div>
            
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    {tag}
                    <button
                      onClick={() => handleRemoveTag(tag)}
                      className="ml-1 hover:text-red-500"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Upload Button */}
          <Button
            onClick={handleUpload}
            disabled={!selectedImage || !caption.trim() || isUploading}
            className="w-full"
          >
            {isUploading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                Subiendo...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Subir contenido
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};
