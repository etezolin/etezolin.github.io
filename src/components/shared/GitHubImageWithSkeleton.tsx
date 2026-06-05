// src/components/shared/GitHubImageWithSkeleton.tsx
import { Box, Skeleton } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { useState } from 'react';

interface GitHubImageWithSkeletonProps {
  src: string;
  alt: string;
  height?: number;
}

export const GitHubImageWithSkeleton = ({
  src,
  alt,
  height = 160,
}: GitHubImageWithSkeletonProps) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <Box sx={{ position: 'relative', width: '100%', height }}>
      {/* Skeleton visível enquanto a imagem carrega */}
      {!loaded && !error && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height={height}
          sx={(theme) => ({
            borderRadius: 2,
            bgcolor:
              theme.palette.mode === 'dark'
                ? alpha(theme.palette.primary.main, 0.08)
                : alpha(theme.palette.primary.main, 0.05),
          })}
        />
      )}

      {/* Fallback se a imagem falhar (ex: GitHub fora do ar) */}
      {error && (
        <Box
          sx={(theme) => ({
            width: '100%',
            height,
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: `1px dashed ${alpha(theme.palette.primary.main, 0.2)}`,
            background: alpha(theme.palette.primary.main, 0.03),
            fontFamily: '"Roboto Mono", monospace',
            fontSize: '0.72rem',
            color: 'text.disabled',
          })}
        >
          {alt}
        </Box>
      )}

      {/* Imagem real — invisível até carregar */}
      <Box
        component="img"
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        sx={{
          width: '100%',
          height: 'auto',
          borderRadius: 2,
          display: loaded && !error ? 'block' : 'none',
          transition: 'opacity 0.4s ease',
          opacity: loaded ? 1 : 0,
        }}
      />
    </Box>
  );
};
