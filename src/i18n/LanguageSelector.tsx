import { Language as LanguageIcon } from '@mui/icons-material';
import {
    Box,
    FormControl,
    MenuItem,
    Select,
    Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Styled component para reduzir a altura do Select
const CompactFormControl = styled(FormControl)(({ theme }) => ({
    '& .MuiInputBase-root': {
        height: '36px',
        fontSize: '0.875rem',
    },
    '& .MuiSelect-select': {
        paddingTop: '8px',
        paddingBottom: '8px',
        paddingLeft: '12px',
        paddingRight: '32px',
        display: 'flex',
        alignItems: 'center',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(255, 255, 255, 0.23)',
    },
}));

const LanguageSelector: React.FC = () => {
    const { i18n, t } = useTranslation();

    // Definir inglês como padrão se não houver idioma salvo
    useEffect(() => {
        const savedLanguage = localStorage.getItem('selectedLanguage');
        if (!savedLanguage) {
            localStorage.setItem('selectedLanguage', 'en');
            i18n.changeLanguage('en');
        }
    }, [i18n]);

    const handleLanguageChange = (event: any) => {
        const newLanguage = event.target.value;

        // Salvar no localStorage
        localStorage.setItem('selectedLanguage', newLanguage);

        // Alterar idioma
        i18n.changeLanguage(newLanguage);
    };

    const languages = [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'pt', name: 'Português', flag: '🇧🇷' }
    ];

    return (
        <Box sx={{
            minWidth: 120,
            display: 'flex',
            alignItems: 'center',
            gap: 1
        }}>
            <LanguageIcon
                color="primary"
                sx={{ fontSize: '20px' }} // Ícone um pouco menor para combinar
            />
            <CompactFormControl size="small">
                <Select
                    labelId="language-select-label"
                    value={i18n.language || 'en'}
                    onChange={handleLanguageChange}
                    displayEmpty={false}
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                '& .MuiMenuItem-root': {
                                    fontSize: '0.875rem',
                                    minHeight: '36px',
                                }
                            }
                        }
                    }}
                >
                    {languages.map((lang) => (
                        <MenuItem key={lang.code} value={lang.code}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1
                            }}>
                                <span style={{ fontSize: '16px' }}>{lang.flag}</span>
                                <Typography variant="body2">{lang.name}</Typography>
                            </Box>
                        </MenuItem>
                    ))}
                </Select>
            </CompactFormControl>
        </Box>
    );
};

export default LanguageSelector;
