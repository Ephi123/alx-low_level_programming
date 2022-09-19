#include "main.h"
/**
 * _strlen -> count the length of string
 * @s: paramater that has string
 * Return: length of string
 */
int _strlen(char *s)
{
int n;
while (*s != '\0')
{
n += 1;
*s =  *s + 1;
}
return (n);
}
