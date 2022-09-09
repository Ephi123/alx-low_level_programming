#include <stdio.h>
/**
 * main - Entry point
 *
 * Return: Always 0 (Success)
 */
int main(void)
{
char ch_u;
char ch_l;
for (ch_l = 'a'; ch_l <= 'z'; ch_l++)
{
putchar(ch_l);
}
for (ch_u = 'A'; ch_u <= 'Z'; ch_u++)
{
putchar(ch_u);
}
putchar('\n');
return (0);
}
