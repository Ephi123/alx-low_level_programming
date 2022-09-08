#include <stdio.h>
/**
 * main - Entry point
 *
 *Return: Always 0 (Success)
 */
int main(void)
{
char array[58] = { 'a', 'n', 'd', ' ', 't', 'h', 'a', 't', ' ', 'p', 'i', 'e',
'c', 'e',' ', 'o', 'f', ' ', 'a', 'r', 't', ' ', 'i', 's', ' ', 'u', 's', 'e', 
'f', 'u','l', '"', ' ', '-', ' ', 'D', 'o', 'r', 'a', ' ', 'K', 'o', 'r', 'p', 
'a', 'r',',', ' ', '2', '0', '1', '5', '-', '1', '0', '-', '1', '9'};
int i;
for (i = 0; i <= 57; i++)
{
putchar(array[i]);
}
return (1);
}

