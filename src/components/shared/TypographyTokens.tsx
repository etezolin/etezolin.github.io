/**
 * TypographyTokens.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Single source of truth for all text styles across the portfolio.
 *
 * HIERARCHY (large → small):
 *
 *   SectionTitle   — opens each page         h2, 2rem, gradient
 *   CardTitle      — inside CardHeader        0.97rem, 600, text.primary
 *   CardSubtitle   — below CardTitle          0.72rem, text.secondary
 *   SectionLabel   — above chip/row groups    0.65rem, uppercase, text.disabled
 *   BodyMono       — body copy / descriptions 0.85rem, text.secondary
 *   MetaMono       — timestamps, years, meta  0.78rem, text.secondary
 *
 * USAGE:
 *   import { SectionTitle, CardTitle, CardSubtitle, SectionLabel, BodyMono, MetaMono }
 *     from '../../components/shared/TypographyTokens';
 *
 *   <SectionTitle>{t('experienceTitle')}</SectionTitle>
 *   <CardTitle>{t('currentJobTitle')}</CardTitle>
 *   <CardSubtitle>{t('currentJobDescription')}</CardSubtitle>
 *   <SectionLabel>{t('results')}</SectionLabel>
 *   <BodyMono>{t('recruiterMessagePt1')}</BodyMono>
 *   <MetaMono>{item.year}</MetaMono>
 *
 * CHANGING THE HIERARCHY:
 *   Edit only this file — every page updates automatically.
 *   E.g. to make CardTitle larger: change fontSize from '0.97rem' to '1.05rem'.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { TypographyProps } from '@mui/material';
import { Typography } from '@mui/material';
import type { FC, ReactNode } from 'react';

// ─── Shared font ──────────────────────────────────────────────────────────────
const MONO = '"Roboto Mono", monospace';

// ─── Prop types ───────────────────────────────────────────────────────────────
interface TokenProps {
  children: ReactNode;
  /** Pass any extra MUI sx overrides — they merge on top of the token style */
  sx?: TypographyProps['sx'];
}

// ─── Tokens ───────────────────────────────────────────────────────────────────

/**
 * SectionTitle
 * The gradient h2 that opens each page section.
 * Size: 2rem desktop / 1.75rem mobile
 */
export const SectionTitle: FC<TokenProps> = ({ children, sx }) => (
  <Typography
    variant="h2"
    sx={{
      mb: 4,
      backgroundImage: (t) =>
        `linear-gradient(135deg, ${t.palette.primary.light} 0%, ${t.palette.primary.main} 40%, ${t.palette.secondary.main} 100%)`,
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: 700,
      fontSize: { xs: '1.75rem', md: '2rem' },
      fontFamily: MONO,
      ...(sx as object),
    }}
  >
    {children}
  </Typography>
);

/**
 * CardTitle
 * Primary label inside a CardHeader — the "what is this card about" line.
 * Size: 0.97rem, weight 600
 */
export const CardTitle: FC<TokenProps> = ({ children, sx }) => (
  <Typography
    sx={{
      fontFamily: MONO,
      fontWeight: 600,
      fontSize: '0.97rem',
      color: 'text.primary',
      lineHeight: 1.3,
      ...(sx as object),
    }}
  >
    {children}
  </Typography>
);

/**
 * CardSubtitle
 * Secondary line below CardTitle — institution, period, description.
 * Size: 0.72rem, text.secondary
 */
export const CardSubtitle: FC<TokenProps> = ({ children, sx }) => (
  <Typography
    variant="caption"
    sx={{
      fontFamily: MONO,
      fontSize: '0.72rem',
      color: 'text.secondary',
      lineHeight: 1.4,
      display: 'block',
      ...(sx as object),
    }}
  >
    {children}
  </Typography>
);

/**
 * SectionLabel
 * Uppercase label above groups of chips, rows, or sub-sections.
 * Size: 0.65rem, letter-spacing 1.6px, text.disabled
 */
export const SectionLabel: FC<TokenProps> = ({ children, sx }) => (
  <Typography
    sx={{
      fontFamily: MONO,
      fontSize: '0.65rem',
      fontWeight: 600,
      letterSpacing: '1.6px',
      textTransform: 'uppercase',
      color: 'text.disabled',
      mb: 1,
      display: 'block',
      ...(sx as object),
    }}
  >
    {children}
  </Typography>
);

/**
 * BodyMono
 * Running body copy — descriptions, recruiter messages, long paragraphs.
 * Size: 0.85rem, text.secondary, lineHeight 1.75
 */
export const BodyMono: FC<TokenProps> = ({ children, sx }) => (
  <Typography
    sx={{
      fontFamily: MONO,
      fontSize: { xs: '0.82rem', md: '0.85rem' },
      color: 'text.secondary',
      lineHeight: 1.75,
      ...(sx as object),
    }}
  >
    {children}
  </Typography>
);

/**
 * MetaMono
 * Small metadata — years, periods, experience tags.
 * Size: 0.78rem, text.secondary
 */
export const MetaMono: FC<TokenProps> = ({ children, sx }) => (
  <Typography
    sx={{
      fontFamily: MONO,
      fontSize: '0.78rem',
      color: 'text.secondary',
      lineHeight: 1.3,
      ...(sx as object),
    }}
  >
    {children}
  </Typography>
);
