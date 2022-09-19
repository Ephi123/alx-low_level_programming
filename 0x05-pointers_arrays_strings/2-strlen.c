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
len += 1;
*s++;
}
return (len);
}
