# --------------------
# Build stage
# --------------------
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /src

# Copy only csproj first (better layer caching)
COPY *.csproj ./
RUN dotnet restore

# Copy rest of source
COPY . ./

# Publish with Release config
RUN dotnet publish -c Release -o /out

# --------------------
# Runtime stage
# --------------------
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime

WORKDIR /app

# Copy published output
COPY --from=build /out ./

# Expose port (Render auto-detects but good for clarity)
ENV ASPNETCORE_URLS=http://+:8080
EXPOSE 8080

# Run app
ENTRYPOINT ["dotnet", "LoqiAI.Backend.dll"]
