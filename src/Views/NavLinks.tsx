import { RouteComponentProps } from 'react-router';

export function getNavLinks(pageProps: RouteComponentProps) {
        return [
                { label: 'Home', path: '/' },
                { label: 'Gallery', path: '/dasor' },
                { label: 'Team', path: '/team' },
                { label: 'Updates', path: '/settings' },
                { label: 'Roadmap', path: '/help' },
        ];
}