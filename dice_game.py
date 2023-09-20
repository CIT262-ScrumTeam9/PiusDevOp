

import random


def roll_dice():
    """Simulate rolling two dice and return the sum."""
    die1 = random.randint(1, 6)
    die2 = random.randint(1, 6)
    return die1 + die2


def main():
    print("Welcome to the Dice Game!")
    while True:
        try:
            guess = int(input("Guess the sum of two dice rolls (2-12): "))
            if 2 <= guess <= 12:
                break
            else:
                print("Please enter a valid guess between 2 and 12.")
        except ValueError:
            print("Invalid input. Please enter a number between 2 and 12.")

    actual_sum = roll_dice()
    print(f"The dice rolls are: {actual_sum}")

    if guess == actual_sum:
        print("Congratulations! You guessed correctly.")
    else:
        print("Sorry, you guessed wrong. Try again!")


if __name__ == "__main__":
    main()
