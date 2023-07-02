import { act, render, screen } from '@testing-library/react';

import { MovingDiv } from './MovingDiv';

describe('MovingDiv', () => {
  it('renders without crashing', () => {
    render(
      <MovingDiv maximumHeight={1000} speedOfMovement={10} delayBetweenMovement={100}>
        <div>Content</div>
      </MovingDiv>
    );
    const component = screen.getByTestId('MovingDiv');
    expect(component).toBeInTheDocument();
  });

  it('moves the content up and down', async () => {
    render(
      <MovingDiv maximumHeight={50} speedOfMovement={10} delayBetweenMovement={100}>
        <div>Content</div>
      </MovingDiv>
    );
    const component = screen.getByTestId('MovingDiv');
    expect(component.style.bottom).toBe('0px');

    // Wait for the initial delay to complete
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });

    // Verify the movement up
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
    });
    expect(component.style.bottom).toBe('10px');

    // Verify the movement up again
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });
    expect(component.style.bottom).toBe('20px');

    // Verify the movement down
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
    });
    expect(component.style.bottom).toBe('50px'); // maximumHeight

    // Verify the movement down again
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 6000));
    });
    expect(component.style.bottom).toBe('0px');
  }, 13000); // Set the timeout value to 13000 ms (13 seconds)

  it('applies the initial delay', async () => {
    render(
      <MovingDiv maximumHeight={50} speedOfMovement={10} delayBetweenMovement={100} initialDelay={2000}>
        <div>Content</div>
      </MovingDiv>
    );
    const contentElement = screen.getByTestId('MovingDiv');
    expect(contentElement.style.bottom).toBe('0px');

    // Wait for the initial delay to complete
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    });

    // Verify the movement starts after the initial delay
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });
    expect(contentElement.style.bottom).toBe('10px');
  });

  it('stops animation at the bottom position and waits for delayBetweenMovement', async () => {
    render(
      <MovingDiv maximumHeight={50} speedOfMovement={10} delayBetweenMovement={100}>
        <div>Content</div>
      </MovingDiv>
    );
    const component = screen.getByTestId('MovingDiv');
    expect(component.style.bottom).toBe('0px');

    // Wait for the initial delay to complete
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });

    // Verify the movement up
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
    });
    expect(component.style.bottom).toBe('10px');

    // Verify the movement up again
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });
    expect(component.style.bottom).toBe('20px');

    // Verify the movement down
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
    });
    expect(component.style.bottom).toBe('50px'); // maximumHeight

    // Verify the movement down again
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 6000));
    });
    expect(component.style.bottom).toBe('0px');

    // Wait for the movement to stop and the delayBetweenMovement to complete
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });

    // Verify the animation stops and the content stays at the bottom position
    expect(component.style.bottom).toBe('0px');
  }, 20000); // Set the timeout value to 20000 ms (20 seconds)

  it('changes direction to move up after reaching the bottom position', async () => {
    render(
      <MovingDiv maximumHeight={50} speedOfMovement={10} delayBetweenMovement={100}>
        <div>Content</div>
      </MovingDiv>
    );
    const component = screen.getByTestId('MovingDiv');
    expect(component.style.bottom).toBe('0px');

    // Wait for the initial delay to complete
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });

    // Verify the movement up
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
    });
    expect(component.style.bottom).toBe('10px');

    // Verify the movement up again
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });
    expect(component.style.bottom).toBe('20px');

    // Verify the movement down
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
    });
    expect(component.style.bottom).toBe('50px'); // maximumHeight

    // Wait for the delayBetweenMovement
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
    });

    // Verify the direction changes to move up
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });
    expect(component.style.bottom).toBe('40px');
  }, 10000);
});
