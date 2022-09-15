#include "main.h"
#include <stdio.h>
#include <math.h>

/**
 * main - main block, prints the largest prime factor of number
 *
 * Return: 0
 */
int main(void)
{
long number = 612852475143;
int i = (int) sqrt(number);

for (; i <= number; i++)
{
if (number % i == 0)
{
printf("%d\n", i);
break;
}
}
return (0);
}
