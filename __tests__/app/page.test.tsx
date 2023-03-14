import { render, waitFor } from '@testing-library/react';
import Page from '../../app/page';

describe('Page', () => {
    it('should render without crashing', async () => {
        // @ts-expect-error Async Component
        const { container } = await waitFor(() => render(<Page />));
        expect(container).toBeTruthy();
    });
});