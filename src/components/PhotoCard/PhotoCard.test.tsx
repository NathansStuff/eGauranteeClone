import { fireEvent, render, screen } from '@testing-library/react';

import { PhotoCard } from './PhotoCard';

describe('PhotoCard', () => {
  test('renders correctly', () => {
    const imageLink = '/example.jpg';
    const altText = 'Example Alt Text';
    const title = 'Example Title';
    const subtitle = 'Example Subtitle';
    const handleClick = jest.fn();

    render(
      <PhotoCard imageLink={imageLink} altText={altText} title={title} subtitle={subtitle} handleClick={handleClick} />
    );

    // Check if the title and subtitle are rendered correctly
    const titleElement = screen.getByText(title);
    const subtitleElement = screen.getByText(subtitle);
    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();

    // Check if the image is rendered correctly
    const imageElement = screen.getByAltText(altText);
    expect(imageElement).toHaveAttribute('src', '/_next/image?url=%2Fexample.jpg&w=3840&q=75');

    // Check if the icons are rendered correctly
    const chevronIcon = screen.getByTestId('PhotoCard-ChevronRightIcon');
    expect(chevronIcon).toBeInTheDocument();

    // Simulate mouse hover on the component
    fireEvent.mouseEnter(chevronIcon);

    // Check if the icon changes to the arrow icon on hover
    const arrowIcon = screen.getByTestId('PhotoCard-ArrowRightIcon');
    expect(arrowIcon).toBeInTheDocument();

    // Simulate mouse leave from the component
    fireEvent.mouseLeave(arrowIcon);

    // Check if the icon changes back to the chevron icon
    expect(chevronIcon).toBeInTheDocument();

    // Simulate click on the component
    fireEvent.click(arrowIcon);

    // Check if the handleClick function is called
    expect(handleClick).toHaveBeenCalled();
  });
});
