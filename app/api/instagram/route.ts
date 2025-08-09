import { NextRequest, NextResponse } from 'next/server';
import { getInstagramPostsOfficial } from '../../../lib/instagram-official';
import { validateInstagramConfig } from '../../../lib/instagram-config';

export async function GET(request: NextRequest) {
  try {
    // Verificar configuración
    const config = validateInstagramConfig();
    
    // Obtener posts usando APIs oficiales
    const posts = await getInstagramPostsOfficial();
    
    // Cache headers para optimizar performance
    const response = NextResponse.json({ 
      success: true, 
      data: posts,
      timestamp: new Date().toISOString(),
      count: posts.length,
      config: {
        hasGraphAPI: config.hasGraphAPI,
        hasBasicDisplay: config.hasBasicDisplay,
        isValid: config.isValid
      }
    });

    // Cache por 30 minutos
    response.headers.set('Cache-Control', 'public, s-maxage=1800, stale-while-revalidate=3600');
    
    return response;
  } catch (error) {
    console.error('Instagram API error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch Instagram posts',
        message: 'Using fallback content',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}
